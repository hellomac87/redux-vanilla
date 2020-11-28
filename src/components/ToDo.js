import React from 'react';
import { connect } from 'react-redux';
import { actionCreatros } from '../store';

function ToDo({ text, onButtonClick }) {
  return (
    <li>
      {text} <button onClick={onButtonClick}>Delete</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onButtonClick: () => dispatch(actionCreatros.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
