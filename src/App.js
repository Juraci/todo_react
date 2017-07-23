import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, List } from './components/todo';

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
  }

  get_todo(todo) {
    return <li key={ todo.id }><input className="check-box" defaultChecked={ todo.isComplete } type="checkbox"/> { todo.name }</li>
  }

  handleInputChange(e) {
    this.setState({ currentTodo: e.target.value });
  }

  render() {
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <Form handleInputChange={ this.handleInputChange } currentTodo={ this.state.currentTodo } />
          <List todos={ this.state.todos } />
        </div>
      </div>
    );
  }
}

export default App;
