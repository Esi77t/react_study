import { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

// Button
// 다양한 스타일(Variant) : text, contained, outlined
// 색상(Color),
// 크기(Size)를 지원하는 버튼 컴포넌트

// Grid2
// CSS Grid 레이아웃 기반의 그리드 시스템
// Flexbox 기반의 기존 Grid보다 행, 열 제어가 직관적이고, rowSpacing, columnSpacing으로 간격을 조절할 수 있다
// 주요 props
// container : 그리드 컨테이너로 설정
// item : 그리드 아이템으로 설정 (생략해도 자동 감지)
// xs(0), sm(600), md(900), lg(1200), xl(1536) : 각 브레이킹포인트 별 차지할 컬럼수 (기본 12분할)
// 브레이킹 포인트 : 화면 너비 기준값
// columns : 총 컬럼 수 조정(기본 12)
// rowSpacing, columnSpacing : 행, 열 간격

// TextField
// 입력(input), 라벨(label), 헬퍼 텍스트(helperText), 에러 표시(error)를 한번에 처리 해줄 수 있는 컴포넌트
// 주요 props
// variant : 스타일 설정
// label : 라벨 텍스트
// helperText : 입력 하단 도움 텍스트
// error : 에러 상태표시 true만 빨간색으로 강조
// fullWidth : 가로 100% 차지
// multiline : 여러줄 입력 여부
// rows : multiline 일 때 보이는 줄 수
// type : text, password, email 등 입력 타입

// react에서 style을 줄 때는 js객체형식으로 줘야한다

// props로 넘어온 내용을 받아서 사용할 준비가 끝남
const AddTodo = ({add}) => {

    const [item, setItem] = useState({title:""});

    const onInputChange = (e) => {
        setItem({title:e.target.value});
        console.log({title:e.target.value});
    }

    const onButtonClick = () => {
        if(item.title.trim() === '') {
            alert('내용을 입력하세요');
            return; // 내용을 진행하지 않고 함수를 빠져나간다
        }

        // props로 넘겨받은 add함수를 호출
        add(item); // add({title:'내용'})
        setItem({title:""}) // 함수에 전달을 하고 나면 입력 필드를 지워준다
    }

    const enterKeyEventHandler = (e) => {
        if(e.key == "Enter") {
            onButtonClick();
        }
    }

    return (
        <Grid 
            container
            style={{MarginTop: 20}}
            justifyContent="center"
            alignContent="center"
        >
            <Grid xs={11} md={11} item style ={{paddingRight : 16}}>
                <TextField
                    placeholder='Add Todo here'
                    fullWidth
                    value={item.title}
                    onChange={onInputChange}
                    onKeyDown={enterKeyEventHandler} />
            </Grid>
            <Grid>
                <Button fullWidth
                style={{height:'100%'}}
                color='secondary'
                variant='outlined'
                onClick={onButtonClick}> + </Button>
            </Grid>
        </Grid>
    );
}

export default AddTodo;