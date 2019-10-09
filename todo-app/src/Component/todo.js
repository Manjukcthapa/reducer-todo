import React from 'react';


const Todo = ({item, dispatch }) => {
    const lineThrough = () => {
        dispatch({
            type: 'TOGGLE_COMPLETED',
            payload: item.id
        });
    };

    return (
        <div className={`list ${item.completed}`} onClick={()=> lineThrough()}>
        <p>{item.item}</p>
        </div>
    )
}

export default Todo;
