import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreatros } from '../store';

function Home({ toDos, addToDo, deleteToDo }) {
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();

    addToDo(text);
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

function mapStateToProps(state, ownProps) {
  return {
    toDos: state,
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    addToDo: (text) => dispatch(actionCreatros.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
