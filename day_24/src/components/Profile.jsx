import React, { useContext } from 'react'
import {AuthContext} from '../store/store'
import {Redirect} from 'react-router-dom'
import SignedIn from './SignedIn';

const Profile = () => {

    const {state} = useContext(AuthContext);

    if(!state.auth) return <Redirect to='/' />

    return (
        <div className='container'>
            <h2>Here's your profile, {state.user.name}</h2>
            <SignedIn />
        </div>
    )
}

export default Profile
