import React, { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/Reducer";

const Form = ({ dispatch }) => {
  const [itemName, setItemName] = useState("");

  const handleChanges = e => {
    setItemName(e.target.value);
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div className="TodoForm">
        <div className='todo-input'>
      <input type="text" value={itemName} onChange={handleChanges} />
      </div>
      <div  className='todo-buttons'>
      <button
        onClick={() => {
          dispatch({ type: "ADD_ITEM", payload: itemName });
          setItemName("");
        }}
      >
        Add 
      </button>
      <button onClick={clearCompleted}>Clear</button>
      </div>
    </div>
  );
};

export default Form;
