import React, { useState,  useReducer } from "react";
import { reducer, initialState } from "../reducers/Reducer";

const Form = () => {
  const [itemName, setItemName] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

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
          dispatch({ type: "addItem", payload: itemName });
          setItemName("");
        }}
      >
        Add Item
      </button>
    </div>
  );
};

export default Form;
