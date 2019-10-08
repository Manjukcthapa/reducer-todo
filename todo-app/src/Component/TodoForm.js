import React from "react";

const Form = () => {
const [itemName, setItemName] = useState();

const handleChanges = (e) => {
    setItemName(e.target.value)
}


    return (
        <div>
            <input
            type="text"
            name="item"
            value={itemName}
            onChange={handleChanges}/>
        </div>
    )
}

export default Form