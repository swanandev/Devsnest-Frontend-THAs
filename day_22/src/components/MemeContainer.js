import React from 'react'
import MemeCard from './MemeCard';



const MemeContainer = ({memeTemplates, generateMeme}) => {
    
    return (
        <div className="meme-container">
            {memeTemplates !== null ? memeTemplates.map((_, inx) => 
                <MemeCard handleClick={generateMeme} key={inx} memeData={memeTemplates[inx]} />
            ) : ""}
        </div>
    )
}

export default MemeContainer
