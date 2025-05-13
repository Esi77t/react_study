import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'; //Todo 컴포넌트를 사용하기 위해 import
import { List, Paper, Container, AppBar, Toolbar, Grid, Typography, Button } from '@mui/material'
import AddTodo from './AddTodo';
import axios from 'axios';
import { call, signout } from './service/ApiService';

// Container
// 레이아웃의 가로 폭을 제한하고, 중앙 정렬 및 기본 패딩을 자동으로 적용해주는 컴포넌트

// 주요 props
// maxWidth : 최대 너비를 지정 (xs, sm, md, lg, xl, false)
// fixed : maxWidth와 관계없이 항상 고정폭으로 제공


function App() {
  // 하나의 할 일을 객체로 관리할 것이다
  // id, title, done
  const [items, setItem] = useState([])
  const [loading, setLoading] = useState(true);
  
  // 최초 렌더링 시 한번만 실행
  useEffect(() => {
    // 조회
    call("/todo", "GET", null)
      .then(result => {
        setItem(result.data)
        setLoading(false)
      });
  }, []);
  

  const add = (item) => {
    // DB에 추가하기 위해 백엔드로 데이터를 전달
    call("/todo", "POST", item)
    // 데이터를 추가하고, 전체 데이터를 반환받아서 state에 세팅을 하여 다시 렌더링이 일어난다
      .then(result => setItem(result.data));
  }

  // 삭제를 해주는 deleteItem()함수 만들기
  // useState(), 기능을 하는 함수를 App.js에 만든 이유
  // 전체 Todo리스트는 App.js에서 관리를 하기 때문
  // DB에서의 삭제는 delete from 테이블 where id = 0;...
  const deleteItem = (item) => {
    call("/todo", "DELETE", item)
      .then(result => setItem(result.data));
  }

  const editItem = (item) => {
    call("/todo", "PUT", item)
      .then(result => setItem(result.data));
  }


  // react는 key속성에 들어있는 값을 참고해서, 리스트의 요소가 변경될 경우 어떤 요소가 변경되었는지
  // 빠르게 파악할 수 있다.
  const todoItems = items?.length > 0 && 
    // Paper 컴포넌트
    // 종이같은 표면 효과를 제공하는 컨테이너 컴포넌트
    // elevation(그림자 깊이)를 통해 높낮이를 표현하고
    // 배경색과 그림자 효과를 콘텐츠를 돋보이게 한다
    <Paper style={{margin: 16}}>
       <List>  {/* 일련의 항복을 세로로 나열하는 컨테이너 역할 */}
        {items.map((item) => 
        <Todo item={item} key={item.id} deleteItem={deleteItem} editItem={editItem} />)}
      </List>
    </Paper>

  // 네비게이션 바
  let navigationBar = (
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent="space-between" container sx={{ flexGrow : 1 }}>
          <Grid item>
            <Typography variant='h6'>오늘의 할일</Typography>
          </Grid>
          <Grid item>
            <Button color='inherit' raised onClick={ signout }>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )

  // 로딩 중이 아닐 때 렌더링할 부분
  let todoListPage = (
    <div className="App">
      { navigationBar }
      <Container maxWidth="md">
        {/* AddTodo에 add함수를 전달 {add : function add(item) {~}} */}
        <AddTodo add={ add }/>
        <div className='TodoList'>
          { todoItems }
        </div>
      </Container>
    </div>
  );

  // 로딩 중일 때 렌더링 할 부분
  let loadingPage = <h1>불러오는 중...</h1>
  let content = loadingPage;

  if(!loading) {
    content = todoListPage;
  }

  return (
    <div className="App">
      {content}
    </div>
  );
  
}

export default App;