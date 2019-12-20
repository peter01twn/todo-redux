import React from 'react';
// import Todo from './component/todo'
import './scss/all.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
