import React from 'react';
import '../scss/todo.scss';

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      ok: true
    }
  }
  clickHandler = e => {
    
  }
  render() {
    return (
      <div className="container pt-5">
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
            value="todo thing"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={this.clickHandler}
            >
              新增
            </button>
          </div>
        </div>
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
          <div className="tab-content border border-top-0 mb-3" id="myTabContent">
            <div className="tab-pane fade show active" id="entire" role="tabpanel">
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <input type="checkbox" name="" id="" />
                <p className="flex-fill mb-0 pl-3 text-left">all things</p>
                <a href="#">delete</a>
              </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel">
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <input type="checkbox" name="" id="" />
                <p className="flex-fill mb-0 pl-3 text-left">somethig todo</p>
                <a href="#">delete</a>
              </div>
            </div>
            <div className="tab-pane fade" id="contact" role="tabpanel">
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <input type="checkbox" name="" id="" />
                <p className="flex-fill mb-0 pl-3 text-left">somethig finish</p>
                <a href="#">delete</a>
              </div>
            </div>
          </div>
          <footer className="text-right">
            <a href="#" className="btn btn-primary">
              清除已完成的任務
            </a>
          </footer>
        </section>
      </div>
    );
  }
}

export default Todo;
