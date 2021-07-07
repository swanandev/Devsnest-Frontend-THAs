

import React from 'react'

const CalorieItem = ({fooditem}) => {
    console.log(fooditem);
    return (
        <div className="fooditem-container">
            <div className="item-title">
                {fooditem.title}
            </div>
            <div className="item-subtitle">
                {fooditem.subtitle}
                {/* Tasty, not so healthy :( */}
            </div>
        </div>
    )
}

export default CalorieItem;
