import React from 'react'
import { useLocation } from 'react-router-dom'
import SingleEntry from './SingleEntry';
import { useQuery } from './useQuery'

const Container = () => {
    const location = useLocation();
    const query = useQuery(() => location);//custom hook   
    const queries = []

    const handleClear = () => {
        window.location.href = location.pathname
    }

    query.forEach((val, dataKey) => queries.push(<SingleEntry key={dataKey} dataKey={dataKey} val={val} />))
    return (
        <div className='content'>
            <h3>Put queries in form of key=val after ? to see magic!!</h3>
            <p>Note : Separate queries with & symbol!</p><br />
            <p>Ex : ?name=destro&username=xyro123</p>
            {queries}

            {queries.length !== 0 ? <div className="button" onClick={handleClear}>Clear</div> : ""}
        </div>
    )
}

export default Container
