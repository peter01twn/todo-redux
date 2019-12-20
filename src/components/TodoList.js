import React from 'react';
// import PropTypes from 'prop-types'
import Todo from './Todo';
import RemoveLink from '../containers/RemoveLink';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <div key={todo.id}>
        <Todo {...todo} onClick={() => toggleTodo(todo.id)} />
        <RemoveLink id={todo.id} />
      </div>
    ))}
  </ul>
);

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   toggleTodo: PropTypes.func.isRequired
// }

export default TodoList;
