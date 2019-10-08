import React, { useReducer } from "react";
import Todo from "./todo";
import {initialState, reducer } from "./../reducers/Reducer";

function toDoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state.map(item => {
        return <Todo key={item.id} item={item}  dispatch={dispatch}/>;
      })}
    </div>
  );
}

export default toDoList;
