import React, { useContext } from 'react'
import { AuthContext } from '../store/store';

const SignedIn = () => {
    
    const {state, dispatch} = useContext(AuthContext);

    const signOut = () => {
        dispatch({type:'setIsLoading', value:true});
        setTimeout(() => dispatch({type:'signOut'}), 400);
    }
    return (
        <div className="signedIn">
            {state.isLoading ?
                <h3>Loading...</h3> :
                <div className="button" onClick={signOut}>Sign Out</div>
            }    
        </div>
    )
}

export default SignedIn;