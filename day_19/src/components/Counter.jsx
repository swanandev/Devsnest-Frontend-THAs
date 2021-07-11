import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = (e) => {
        setCounter(counter+1);
    }
    return (
        <div className="counter" onClick={handleClick} >
            <div className="counter-text">
                {counter}
            </div>
        </div>
    )
}

export default Counter
