

import React from 'react'

const EditCalorieItem = ({fooditem, saveItem, cancelItem}) => {
    const [editItem, setEditItem] = React.useState({...fooditem});

    const handleChange = (e) => {
        setEditItem({...editItem, [e.target.id]:e.target.value});
    }


    return (
        <div className="fooditem-container">
            <div className="item-subcontainer">
                <div className="edit-item-input-div">
                    <input type="text" placeholder="Item Name" id="title" className="new-item-input" onChange={handleChange} defaultValue={fooditem.title} />
                    <input type="number" placeholder="Calorie Amount" id="calorie" className="new-item-input" onChange={handleChange} defaultValue={fooditem.calorie} />
                </div>
                
                <div className="item-actions">
                    <div className="item-edit button" onClick={() => saveItem(fooditem.id, editItem)}>
                        Save
                    </div>
                    <div className="item-delete button" onClick={(e) => cancelItem(e, fooditem.id)}>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCalorieItem;
