

import React from 'react'

const CalorieItem = ({fooditem, editItem, deleteItem}) => {
    return (
        <div className="fooditem-container">
            <div className="item-subcontainer">
                <div className="item-title">
                    {fooditem.title}
                </div>
                <div className="item-actions">
                    <div className="item-edit button" onClick={(e) => editItem(e, fooditem.id)}>
                        Edit
                    </div>
                    <div className="item-delete button" onClick={(e) => deleteItem(e, fooditem.id)}>
                        Delete
                    </div>
                </div>
            </div>
            <div className="item-subtitle">
                You have consumed {fooditem.calorie} calories today
                {/* Tasty, not so healthy :( */}
            </div>
        </div>
    )
}

export default CalorieItem;
