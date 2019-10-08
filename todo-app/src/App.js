import React from "react";
import TodoList from "./Component/toDoList";
import Form from "./Component/TodoForm";
import "./App.css";

function App() {
  

  return (
    <div className="App">
      <TodoList />
      <Form  />
    </div>
  );
}

export default App;
