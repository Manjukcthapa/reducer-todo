import React, { Component } from 'react';
import TodoList from "./Component/toDoList"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
