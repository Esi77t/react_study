import logo from './logo.svg';
import './App.css';
import { Async, Sync } from './Sync';
import { Fetch, Axios } from './Async';
import { FetchExam } from './FetchExam';
import { UserList } from './UserList';
import { BlogApp } from './Blog';

function App() {
  return (
    <div className="App">
      <BlogApp />
    </div>
  );
}

export default App;
