import logo from './logo.svg';
import './App.css';
import BoardProvider from './context/BoardContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardList from './pages/BoardList';
import WritePost from './pages/WritePost';
import PostDetail from './pages/PostDetail';
import EditPost from './pages/EditPage';

function App() {

  return (
    <BoardProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <BoardList /> } />
          <Route path="/write" element={ <WritePost /> } />
          <Route path="/post/:id" element={ <PostDetail /> } />  
          <Route path="/edit/:id" element={ <EditPost /> } />
        </Routes>
      </BrowserRouter>
    </BoardProvider>
  );
}

export default App;
