import React, { useState,  useReducer } from "react";
import { reducer, initialState } from "../reducers/Reducer";

const Form = ({dispatch}) => {
  const [itemName, setItemName] = useState("");


  const handleChanges = e => {
    setItemName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={itemName}
        onChange={handleChanges}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_ITEM", payload: itemName });
          setItemName("");
        }}
      >
        Add Item
      </button>
     
    </div>
  );
};

export default Form;
