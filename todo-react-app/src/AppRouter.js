import './index.css';
import App from './App';
import Login from './Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import Signup from './Signup';
import SocialLogin from './SocialLogin';
import { useEffect, useState } from 'react';


const Copyright = () => {
    return(
        // Typography 컴포넌트
        // text에 style을 적용할 때 사용되는 컴포넌트
        // variant : html태그 결정
        // color : 텍스트의 색상 지정
        // align : 텍스트의 정렬 방식
        <Typography variant='body2' color='textSecondary' align='center'>
            { "ⓒCopyright " }
            fsoftwareenginner, { new Date().getFullYear() }
            { "." }
        </Typography>
    );
}

const AppRouter = () => {
    const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    useEffect(() => {
        const storedToken = localStorage.getItem("ACCESS_TOKEN");
        if(storedToken && storedToken != 'null') {
            setToken(storedToken);
        }
    }, [])

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ token && token != 'null' ? <App /> : <Navigate to='login' replace />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/sociallogin" element={<SocialLogin />} />
                </Routes>
            </BrowserRouter>
            <Box mt={ 5 }>
                <Copyright />
            </Box>
        </div>
    );
}

export default AppRouter