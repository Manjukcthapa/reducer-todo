import React, { useReducer } from "react";
import Todo from "./todo";
import TodoForm from "./TodoForm";
import { initialState, reducer } from "./../reducers/Reducer";

function toDoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <TodoForm dispatch={dispatch} />
      {state.map(item => {
        return <Todo key={item.id} item={item}  dispatch={dispatch}/>;
      })}
    </div>
  );
}

export default toDoList;
