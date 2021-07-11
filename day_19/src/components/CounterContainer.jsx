import React from 'react';
import Counter from './Counter';

const CounterContainer = () => {
    const counters = [1, 2, 3, 4];
    return (
        <div className="counter-container">
            {counters.map(counter => <Counter key={counter} />)}
        </div>
    )
}

export default CounterContainer
