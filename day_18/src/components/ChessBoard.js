import React from 'react'
import ChessCell from './ChessCell';

const ChessBoard = () => {
    let rows = [];
    for (let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            rows.push(j%2 === 1 ? (i%2 === 0 ? 
            <ChessCell color='black' /> : 
            <ChessCell color = 'white' />) : 
            ((i%2 === 0 ? <ChessCell color='white' /> : 
            <ChessCell color='black'/>)));
        }
    }
    return(
        <div className="chess-board-wrapper">
            <div className="chess-board">
                {rows}
            </div>
        </div>
    )
}

export default ChessBoard;
