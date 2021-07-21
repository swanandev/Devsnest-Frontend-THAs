import React, { useContext } from 'react'
import { AuthContext } from '../store/store'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'






const Home = () => {

    const {state} = useContext(AuthContext);

    return (
        <div className='container'>
            <h3>If not signed in, cannot access Profile & Dashboard </h3>
            {(state.auth ? <SignedIn /> : <SignedOut />)}
        </div>
    )
}

export default Home
