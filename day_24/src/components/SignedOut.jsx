import React, { useState, useContext } from "react";
import { AuthContext } from "../store/store";

const SignedOut = () => {
    const [username, setUsername] = useState('');

    const {state, dispatch} = useContext(AuthContext);

    const signIn = (username) => {
        if(username === ''){
            alert('Enter Valid Username');
            return;
        }
        dispatch({type:'setIsLoading', value:true})
        setTimeout(() => dispatch({type:'signIn', user:{name:username}}), 400);
    }

    const handleChange = e => {
        setUsername(e.target.value);
    }
    return(
        <div className='signedOut'>
            {state.isLoading ? 
                <h3>Loading...</h3> :
                <>
                    <div className="input-div">
                        <input placeholder='username' onChange={handleChange} id='username' className='input' type="text" />
                    </div>
                    <div className="button" onClick={() => signIn(username)}>Sign In</div>
                </>
            }
        </div>
    )
}

export default SignedOut;