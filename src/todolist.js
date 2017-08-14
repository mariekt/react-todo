import React from 'react';
import List from './list.js';
import Checkbox from './checkbox.js';
import Textbox from './textbox.js';

export default class TodoList extends React.Component {
  render() {
    return (
      <div style={{position: 'relative', float: 'left', margin: '20px', 'margin-top': '100px'}} className="todoapp">
        <header className="header">
          <h1>{this.props.name}</h1>
          <Textbox onSubmit={(value) => this.props.addTodo(this.props.todoListId, value)} placeholder="Hva må du gjøre?" />
        </header>
        <section className="main">
          <List elements={this.props.todos} removeTodo={this.props.removeTodo} setTodoChecked={this.props.setTodoChecked} todoListId={this.props.todoListId}/>
        </section>
      </div>
    );
  }
}
