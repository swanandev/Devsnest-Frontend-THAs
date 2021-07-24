import React from 'react'
import { useDispatch } from 'react-redux';
import { changeEmail, changeName } from '../store/actions/userActions';

const UserForm = () => {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        switch(e.target.id){
            case 'name':
                dispatch(changeName(e.target.value))
                break
            case 'email':
                dispatch(changeEmail(e.target.value))
                break
            default:
                break;
        }
    }
    return (
        <div className="container">
            <h2>Input</h2>
            <div className='user-input-div'>
                <input placeholder='Name' id='name' className='user-input' type="text" onChange={handleChange} />
                <input placeholder='Email' id='email' className='user-input' type='email' onChange={handleChange} />
            </div>
        </div>
    )
}

export default UserForm
