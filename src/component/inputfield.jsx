import React from 'react';
import Button from './button'

class InputField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    };
  }
  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  handleClick = () => {
    let input = this.state.inputValue
    this.setState({
      inputValue: ''
    })
    this.props.onClick(input)
  }
  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="todo">
            代辦事項
          </label>
        </div>
        <input
          type="text"
          id="todo"
          name="todo"
          className="form-control"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <Button text='新增' onClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default InputField;
