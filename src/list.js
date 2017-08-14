import React from 'react';


export default class List extends React.Component {
  render() {
    const elements = this.props.elements.map((el, i) => {
      return (
        <li key={i} className={el.checked ? 'completed' : ''}>
          <div className="view">
            <input className="toggle" type="checkbox" checked={el.checked}
              onChange={(e) => {this.props.setTodoChecked(this.props.todoListId, el.id, e.target.checked)}} />

            <label>{el.value}</label>
            <button className="destroy" onClick={() => {this.props.removeTodo(this.props.todoListId, el.id)}}></button>
          </div>
        </li>
      );
    });

    return (
      <ul className="todo-list">
        {elements}
      </ul>
    );
  }
}
