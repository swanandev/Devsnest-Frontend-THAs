
import React, { useState } from 'react'
import CalorieItem from './CalorieItem'
import EditCalorieItem from './EditCalorieItem'

//Dummy Data

/**
 * {id:1,title:'Pizza',calorie:56},
            {id:2,title:'Burger',calorie:69},
            {id:3,title:'Coke',calorie:500},
            {id:4,title:'Browne', calorie:180},
            {id:5,title:'Fried Rice', calorie:90},
            {id:6,title:'Lassania', calorie:200},                     
            {id:7,title:'Pani Puri', calorie:10}
 */

const CalorieContainer = (props) => {

    const [calorieItems, setCalorieItems] = useState(
        [
            
        ]
    )

    const [newItem, setNewItem] = useState({title:"", calorie:0});
    let [editingItem, setEditingItem] = useState(-1);

    const handleNewItem = () => {
        if(newItem.title === ""){
            alert("Enter Food Item Name!!");
            return
        }
        if(newItem.calorie <= 0){
            alert("Enter Valid Calorie Value!!");
            return
        }
        console.log(newItem);
        setCalorieItems([...calorieItems, 
            {id:Math.floor(999 * calorieItems.length * Math.random()), ...newItem}]
        )
    }

    const handleOnChange = (e) => {
        setNewItem({...newItem, [e.target.id]:e.target.value});
    }

    const handleEdit = (e, id) => {
        console.log("Editing");
        setEditingItem(id);
    }

    const handleUpdate = (id, updatedItem) => {
        let currenItemIndex = calorieItems.indexOf(calorieItems.filter(el => el.id === id)[0]);
        let newItems = [...calorieItems];
        newItems[currenItemIndex] = updatedItem;
        setCalorieItems(newItems);
        setEditingItem(-1);
    }

    const cancelUpdate = () => {
        setEditingItem(-1);
    }

    const handleDelete = (e, id) => {
        setCalorieItems(calorieItems.filter(el => el.id !== id));
    }

    return (
        <React.Fragment>
            <div className="new-item-container">
                <div className="new-item-input-div">
                    <input id="title" className="new-item-input" placeholder="Item Name" type='text' onChange = {handleOnChange} />
                    <input id="calorie" className="new-item-input" placeholder="Calorie Amount" type='number' onChange={handleOnChange} />
                </div>
                <div className="button" onClick={handleNewItem}>
                    Add Item
                </div>
            </div>
            <div className='calorie-container'>
                {
                    calorieItems.length > 0 ?
                    calorieItems.map((el) => {
                        return(
                            el.id !== editingItem ?
                            <CalorieItem key={el.id} editItem={handleEdit} deleteItem={handleDelete} fooditem={{...el}} /> :
                            <EditCalorieItem key={el.id} saveItem={handleUpdate} cancelItem={cancelUpdate} fooditem={el} />
                        )
                    }) :
                    <h3>No Items Available</h3>
                }
            </div>
        </React.Fragment>
    )
}

export default CalorieContainer;
