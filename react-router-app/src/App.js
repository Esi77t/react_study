import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// Routes : switch같은 개념으로 가장 구체적인 경로를 우선 매칭한다
// Route : URL과 같은 컴포넌트를 매핑하여 특정 경로에 맞는 컴포넌트를 렌더링한다
import {  
  About, 
  PostDetail, 
  UserProfile, 
  Dashboard, 
  Overview, 
  Settings, 
  NotFound,
  Login,
  PrivateRoute } from './Pages';
import { Navbar } from './NavBar';
import Routing from './route/Routing'
import { Home, Categories, Products, ProductDetail } from './Exam';

// Route 컴포넌트의 주요 속성
// 1. path
// URL 경로를 정의한다
// 사용자가 특정 경로에 접근할 때 어떤 컴포넌트를 렌더링할지 결정한다
// 2. element
// path에 들어있는 경로와 일치할 때 렌더링할 컴포넌트를 지정
function App() {

  // 아이디랑 비밀번호를 백엔드로 보내서 검증을 받았다고 가정
  // const isAuthenticated = false;

  return (
    <div className="App">
      {/* <Routing /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* *의 의미 : 매칭되는 주소가 없을 때 */}
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/home" element={<PrivateRoute
                                        element={<Home />} 
                                        isAuthenticated={isAuthenticated}/>} 
                                      /> */}
        {/* <Route path="/:lang/home" element={<Home />} /> */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoriId" element={<Products />} />
        <Route path="/categories/:categoriId/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
