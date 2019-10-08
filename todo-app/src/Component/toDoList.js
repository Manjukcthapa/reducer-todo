import React, { useReducer } from "react";
import Todo from "./todo";
import { instialState , reducer } from "./../reducers/Reducer";

function toDoList() {
  const [state ] = useReducer(reducer, instialState );
  //   const todo = [
  //     {
  //       item: "Ltesttsts",
  //       completed: false,
  //       id: 3892987589
  //     },
  //     {
  //       item: "Learn about ",
  //       completed: false,
  //       id: 7656777
  //     }
  //   ];
  return (
    <div>
        { console.log(state)}
      {state.map(item => {
          return <div>{ item.item}</div>
        //return <Todo key={item.id} todo={item} />;
      })}
    </div>
  );
}

export default toDoList;
