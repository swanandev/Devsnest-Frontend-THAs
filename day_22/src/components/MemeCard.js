import React from 'react'

const MemeCard = ({memeData, handleClick}) => {
    return (
        <div onClick={() => handleClick(memeData)} className="meme-card">
                <div style={{backgroundImage:`url(${memeData.url})`}} className="image">
            </div>
        </div>
    )
}

export default MemeCard
