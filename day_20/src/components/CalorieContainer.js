
import React, { useState } from 'react'
import CalorieItem from './CalorieItem'

const CalorieContainer = (props) => {

    const [calorieItems, setCalorieItems] = useState(
        [{id:1,title:'Pizza',subtitle:'You have consumed 56 cals today'},
        {id:2,title:'Burger',subtitle:'You have consumed 69 cals today'},
        {id:3,title:'Coke',subtitle:'You have consumed 500 cals today'},
        {id:4,title:'Browne', subtitle:'You have consumed 180 cals today'},
        {id:5,title:'Fried Rice', subtitle:'You have consumed 90 cals today'},
        {id:6,title:'Lassania', subtitle:'You have consumed 200 cals today'},                     
        {id:7,title:'Pani Puri', subtitle:'You have consumed 10 cals today'}]
    )

    const handleDelete = (e, id) => {
        setCalorieItems(calorieItems.filter(el => el.id !== id)); 
    }

    return (
        <div className='calorie-container'>
            {
                calorieItems.length > 0 ?
                calorieItems.map((el) => {
                    return(
                        <CalorieItem key={el.id} deleteItem={handleDelete} fooditem={{...el}} />
                    )
                }) :
                <h3>No Items Available</h3>
            }
        </div>
    )
}

export default CalorieContainer;
