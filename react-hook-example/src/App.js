import logo from './logo.svg';
import './App.css';
import Counter from './hook/UseStateEX';
import { ShowHide } from './hook/Exam';
import { Sol1 } from './hook/Exam';
import TimerFunction, { UserList, Count, Cleanup } from './hook/UseEffectEX';
import { Counter_ref, InputFocus, InputSample, PreviousValue } from './hook/UseRefEX';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <PreviousValue />
    </div>
  );
}

export default App;
