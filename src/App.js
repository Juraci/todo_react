import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, List } from './components/todo';
import { addTodo } from './lib/todoHelpers';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        { id: 1, name: 'Learn JSX', isComplete: true },
        { id: 2, name: 'Build an Awesome App', isComplete: false },
        { id: 3, name: 'Ship It!', isComplete: false },
      ],
      currentTodo: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ currentTodo: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.currentTodo === "") {
      return;
    }
    const todos = this.state.todos;
    const newTodo = { id: todos.length + 1, name: this.state.currentTodo, isComplete: false };
    const newList = addTodo(todos, newTodo);
    this.setState({ todos: newList, currentTodo: '' });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <Form
            handleSubmit={ this.handleSubmit }
            handleInputChange={ this.handleInputChange }
            currentTodo={ this.state.currentTodo }
          />
          <List todos={ this.state.todos } />
        </div>
      </div>
    );
  }
}

export default App;
