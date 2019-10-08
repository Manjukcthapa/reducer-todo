import React, { Component } from 'react';
import TodoList from "./Component/toDoList"
import Form from "./Component/TodoForm"
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <TodoList/>
        <Form/>
      </div>
    );
  }
}

export default App;
