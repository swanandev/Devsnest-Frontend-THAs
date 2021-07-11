

import React from 'react'

const CalorieItem = ({fooditem, deleteItem}) => {
    return (
        <div className="fooditem-container">
            <div className="item-subcontainer">
                <div className="item-title">
                    {fooditem.title}
                </div>
                <div className="item-delete button" onClick={(e) => deleteItem(e, fooditem.id)}>
                    Delete
                </div>
            </div>
            <div className="item-subtitle">
                {fooditem.subtitle}
                {/* Tasty, not so healthy :( */}
            </div>
        </div>
    )
}

export default CalorieItem;
