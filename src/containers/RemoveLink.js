import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions';

const RemoveTodo = ({ id, dispatch }) => {
  return <button onClick={() => dispatch(removeTodo(id))}>x</button>;
};

export default connect()(RemoveTodo);
