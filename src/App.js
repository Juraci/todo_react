import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        { id: 1, name: 'Learn JSX', isComplete: true },
        { id: 2, name: 'Build an Awesome App', isComplete: false },
        { id: 3, name: 'Ship It!', isComplete: false },
      ]
    }
  }

  get_todo(todo) {
    return <li key={ todo.id }><input className="check-box" defaultChecked={ todo.isComplete } type="checkbox"/> { todo.name }</li>
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text"/>
          </form>
          <div className="Todo-List">
            <ul>
              { this.state.todos.map(todo => this.get_todo(todo) )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
