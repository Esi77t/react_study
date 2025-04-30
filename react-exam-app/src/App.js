import logo from './logo.svg';
import './App.css';
import { Counter } from './component/component';
import { useState } from 'react';
import { RouterEx } from './router/router';
import { Link } from 'react-router-dom';

function App() {
  
  // useState()
  // 리액트에서 제공하는 훅
  // 함수를 실행하면 상태변수 1개와 변수의 값을 바꿔줄 수 있는 함수 1개를 요소라 갖는 배열을 반환
  const [count, setCount] = useState(0);

  return (
    <div>

      <Link to="/home">홈으로</Link>
      {' | '}
      <Link to="/about">설명으로</Link>
      {' | '}
      <Link to="/dashboard">대시보드로</Link>

      <RouterEx />
      {/* 컴포넌트 호출 */}
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;
