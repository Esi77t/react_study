import logo from './logo.svg';
import './App.css';
import { Async, Sync } from './Sync';
import { Fetch, Axios } from './Async';
import { FetchExam } from './FetchExam';
import { UserList } from './UserList';
import { BlogApp } from './Blog';
import { PromiseDemo } from './Promise';

function App() {
  return (
    <div className="App">
      <PromiseDemo />
    </div>
  );
}

export default App;
