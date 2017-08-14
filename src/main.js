import React from 'react';
import ReactDOM from 'react-dom';
import List from './list.js';
import Checkbox from './checkbox.js';
import Textbox from './textbox.js';
import TodoList from './todolist.js';

class Hello extends React.Component {
  render() {
    return <h2>Hello</h2>
  }
}

class Root extends React.Component {

  constructor(){
    super();
    this.state = {
      todoLists: [{
        id: 1,
        name: 'Fag 1',
        todos: [{
          id: 1,
          value: 'Gjøremål 1',
          checked: true
        }, {
          id: 2,
          value: 'Gjøremål 2',
          checked: false
        }]
      },{
        id: 2,
        name: 'Fag 2',
        todos: [{
          id: 1,
          value: 'Gjøremål 3',
          checked: false
        }, {
          id: 2,
          value: 'Gjøremål 4',
          checked: false
        }]
      }]
    };
  }

  addTodoList(name) {
    const newId = this.state.todoLists.length +1;
    this.setState({
      todoLists: [
        ...this.state.todoLists,
        {
          id: newId,
          name,
          todos: []
        }
      ]
    })
  }

  addTodo(todoListId, value) {
    this.setState({
      todoLists: this.state.todoLists.map((todoList) => {
        if (todoList.id !== todoListId) {
          return todoList;
        }
        const newId = todoList.todos.length + 1;
        todoList.todos.push({
          id: newId,
          value,
          checked: false
        })
        return todoList;
      })
    })
  }

  removeTodo(todoListId, todoId) {
    this.setState({
      todoLists: this.state.todoLists.map((todoList) => {
        if (todoList.id !== todoListId) {
          return todoList;
        }
        todoList.todos = todoList.todos.filter((todo) => todo.id !== todoId);
        return todoList;
      })
    })
  }

  setTodoChecked(todoListId, todoId, checked) {
    console.log(todoListId, todoId, checked);
    this.setState({
      todoLists: this.state.todoLists.map((todoList) => {
        if (todoList.id !== todoListId) {
          return todoList;
        }
        todoList.todos = todoList.todos.map((todo) => {
          if (todo.id !== todoId) {
            return todo;
          }
          todo.checked = checked;
          return todo;
        });
        return todoList;
      })
    })
  }

  render() {
    const todoLists = this.state.todoLists.map((todoList, i) => {
      return <TodoList key={i} name={todoList.name} todos={todoList.todos} todoListId={todoList.id}
        removeTodo={this.removeTodo.bind(this)} addTodo={this.addTodo.bind(this)} setTodoChecked={this.setTodoChecked.bind(this)}/>
    })
    return (
      <div className="container">
        {todoLists}
        <Textbox onSubmit={(value) => this.addTodoList(value)} placeholder="Navn på liste" />
      </div>
    );
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
