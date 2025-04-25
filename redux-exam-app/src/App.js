import logo from './logo.svg';
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import store from './Store';
import { addTodo, removeTodo } from './Action';


const TodoApp = () => {
  const [input, setInput] = useState('');
  const todoList = useSelector((state) => state.todoList);
  const disPatch = useDispatch();
  
  const handleAddTodo = () => {
    if(input.trim()) {
      disPatch(addTodo(Date.now(), input));
      setInput(''); // 입력창 초기화
    }
  }

  const handleRemoveTodo = (id) => {
    disPatch(removeTodo(id));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={input}
        placeholder='Add a new todo'
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
