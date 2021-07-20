import React from 'react'

const SingleEntry = ({dataKey, val}) => {
    return (
        <div className="container">
            <div className="key">
                <p>{dataKey}</p>
            </div>
            <div className="val">
                <p>{val}</p>
            </div>
        </div>
    )
}

export default SingleEntry
