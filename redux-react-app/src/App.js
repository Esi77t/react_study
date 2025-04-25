import logo from './logo.svg';
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, rootReducer } from './Store';
import { increment, decrement, setMessage, setUser, logout } from './Action';
import { useEffect, useState } from 'react';

const Counter = () => {
  // useSelector() : Redux의 store에서 상태를 읽어오는 hook
  // selectorFunction : 스토어 전체 state를 파라미터로 받아, 컴포넌트에 필요한 부분을
  // 반환하는 함수
  const count = useSelector((state) => state.counter.count);
  const message = useSelector((state) => state.counter.message);

  // useDispatch() : Redux 스토어에 액션을 보낼 수 있는 훅
  // 이 훅을 사용해 액션을 디스패치 할 수 있다

  // Redux내부적으로 리듀서가 액션을 처리하도록 호출해서 처리한다
  const dispatch = useDispatch();

  const [input, setInput] = useState('');
 
  const [inputName, setInputName] = useState('');

  const {name, loggedIn} = useSelector(state => state.user);

  useEffect(() => {
    if (loggedIn) {
      setInputName('');  // 로그인 후 입력 필드 초기화
    }
  }, [loggedIn]);
  
  return(
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <hr />
      <h2>Message : {message}</h2>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder='새 메시지 입력'
      />
      <button onClick={() => dispatch(setMessage(input))}>SET MESSAGE</button>
      <hr />
      <h2>
        {/* loggedIn 여부에 따라 '환영합니다 xxx님', '로그인되지 않았습니다.' */}
        {loggedIn ? `환영합니다 ${name}님` : `로그인되지 않았습니다`}
      </h2>
      {/* 이름을 입력하는 필드 */}
      <input
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder='이름을 입력하세요'
      />
      {/* 로그인 버튼 */}
      <button onClick={() => dispatch(setUser(inputName))}>로그인</button>
      {/* 로그아웃 버튼 */}
      <button onClick={() => dispatch(logout())}>로그아웃</button>
    </div>
  )
}

function App() {
  return (
    // Provider : Redux 스토어를 어플리케이션 전체에 제공한다
    // Provider 안에 있는 모든 컴포넌트는 Redux 스토어에 제공한다
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;

// 값에 변경이 일어나서 액션으로 전달 -> 타입이 반환되어 리듀서로 전달
// -> 리듀서에서 실행되고 새로운 상태를 반환한다
// -> 특정 상태를 사용하고 있는 컴포넌트에 대해서 Redux 스토어가
// useSelector를 사용하고 있는 모든 컴포넌트에게 바뀐 것이 있는지 확인해서
// 재렌더링을 하라고 시킨다