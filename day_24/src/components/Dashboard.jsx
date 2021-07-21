import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../store/store';
import SignedIn from './SignedIn';

const Dashboard = () => {

    const {state} = useContext(AuthContext);

    if(!state.auth) return <Redirect to='/' />
    return (
        <div className='container'>
            <h2>Welcome to Dashboard, {state.user.name}</h2>
            <SignedIn />
        </div>
    )
}

export default Dashboard
