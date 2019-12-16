import React from 'react';
import '../scss/todo.scss';

import InputField from './inputfield';
import ListItem from './list-item';
import Button from './button';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoThings: []
    };
  }
  addTodo = input => {
    let inputValue = input;
    if (input === '') {
      return;
    }
    let newAry = this.state.todoThings.slice();
    newAry.push({
      text: input,
      status: false,
      id: Date.now()
    });
     this.changeState('todoThings', newAry)
  };
  deleteItem = id => {
    let newAry = this.state.todoThings.filter(el => el.id != id);
    this.changeState('todoThings', newAry)
  };
  changeStatus = id => {
    let newAry = this.state.todoThings.slice().map(el => {
      if (el.id === id) {
        el.status = !el.status
      }
      return el
    })
    this.changeState('todoThings', newAry)
  };
  removeAllDone = () => {
    let newAry = this.state.todoThings.filter(el => !el.status);
    this.changeState('todoThings', newAry)
  };
  modifyTodo = (id, input='') => {
    let newAry = this.state.todoThings.slice().map(el => {
      if (el.id === id) {
        el.text = input
      }
      return el
    })
    this.changeState('todoThings', newAry)
  }
  changeState = (attr, value) => {
    this.setState(state => ({
      [attr]: value
    }))
  }
  render() {
    const allThings = this.state.todoThings.map(el => (
      <ListItem
        key={el.id}
        todo={el}
        delete={() => this.deleteItem(el.id)}
        changeStatus={() => this.changeStatus(el.id)}
        modifyTodo={i => this.modifyTodo(el.id, i)}
      />
    ));
    const completed = this.state.todoThings
      .filter(el => el.status)
      .map(el => (
        <ListItem
          key={el.id}
          todo={el}
          delete={() => this.deleteItem(el.id)}
          changeStatus={() => this.changeStatus(el.id)}
          modifyTodo={i => this.modifyTodo(el.id, i)}
        />
      ));
    const undone = this.state.todoThings
      .filter(el => !el.status)
      .map(el => (
        <ListItem
          key={el.id}
          todo={el}
          delete={() => this.deleteItem(el.id)}
          changeStatus={() => this.changeStatus(el.id)}
          modifyTodo={i => this.modifyTodo(el.id, i)}
        />
      ));
    return (
      <div className="container pt-5">
        <InputField onClick={i => this.addTodo(i)} />
        <section>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#entire"
                role="tab"
              >
                全部
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#profile"
                role="tab"
              >
                未完成
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#contact"
                role="tab"
              >
                已完成
              </a>
            </li>
          </ul>
          <div
            className="tab-content border border-top-0 mb-3"
            id="myTabContent"
          >
            <div
              className="tab-pane fade show active"
              id="entire"
              role="tabpanel"
            >
              {allThings}
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel">
              {undone}
            </div>
            <div className="tab-pane fade" id="contact" role="tabpanel">
              {completed}
            </div>
          </div>
          <div className="text-right">
            <Button text="清除已完成任務" onClick={this.removeAllDone}/>
          </div>
        </section>
      </div>
    );
  }
}

export default Todo;
