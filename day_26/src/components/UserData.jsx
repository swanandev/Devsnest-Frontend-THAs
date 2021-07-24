import React from 'react'
import { useSelector } from 'react-redux'

const UserData = () => {
    const {name,email} = useSelector(state => state.user)
    return (
        <div className='container'>
            <h2>Data</h2>
            <div className="data-div">
                <p>Username : {name}</p>
                <p>Email : {email}</p>
            </div>
        </div>
    )
}

export default UserData
