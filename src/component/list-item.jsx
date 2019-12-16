import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: this.props.todo.text,
      status: false
    };
  }
  render() {
    return (
      <div className="d-flex justify-content-between align-items-center py-2 px-3 border-bottom">
        <input type="checkbox" name="status" id="status" onChange={this.props.changeStatus}/>
        <input className={`flex-fill mb-0 mx-3 pl-2 border-0 text-left ${this.props.todo.status ? 'line-through' : ''}`} name='text' onChange={e => this.props.modifyTodo(e.target.value)} value={this.props.todo.text} />
        <a href="#" onClick={this.props.delete}>delete</a>
      </div>
    );
  }
}

export default ListItem
