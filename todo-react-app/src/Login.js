import { Container, Grid, Typography, TextField, Button, Box } from "@mui/material";
import { signin } from "./service/ApiService";
import { Link } from "react-router-dom";

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault(); // 페이지가 전체 새로고침 되지 않도록 막는다
        // React같은 SPA에서 태그 클릭시 전체 페이지가 새로고침되지 않고,
        // 클라이언트 라우터로만 경로를 변경하고 싶을 때 사용한다
        const data = new FormData(e.target);    // submit된 form 데이터를 가져옴
        const username = data.get("username");  // username 필드 값 가져옴
        const password = data.get("password");  // password 필드 값 가져옴

        // 아이디, 비밀번호 디버깅용
        console.log("아이디 : ", username);
        console.log("비밀번호 : ", password);

        // signin 호출 로직
        signin({ username: username, password: password });
    }

    return(
        <Container component="main" maxWidth="xs" style={{marginTop: 8}}>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 }>
                    <Typography component="h1" variant="h5" align="center" gutterBottom>
                        로그인
                    </Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit={ handleSubmit }>
                <Grid container spacing={ 2 } direction="column">
                    <Grid item xs={ 12 }>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="이메일 주소"
                            name="username"
                            autoComplete="username"
                        />
                    </Grid>
                    <Grid item xs={ 12 }>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="password"
                            label="패스워드"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={ 12 }>
                        <Box mt={ 2 }>
                            <Button
                                type="submit"
                                fullWidth
                                variant='contained'
                                color='primary'>
                                    로그인
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Link to="/signup" variant="body2">
                            계정이 없으면? 회원가입은 여기서
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default Login;