import logo from './logo.svg';
import Todo from './Todo' //Todo 컴포넌트를 사용하기 위해 import
import './App.css';
import Example from './Example'

function App() {
  return (
    <div className="App">
      <Todo /> {/*Todo 컴포넌트 추가하기*/}
    </div>
  );
}

export default App;