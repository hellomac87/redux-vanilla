import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import ToDo from '../components/ToDo';
import { add,  RootState } from '../store';

function Home() {
  const toDos = useSelector((state: RootState) => state);
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(add(text));
    setText('');
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>
        {toDos?.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}


export default Home;
