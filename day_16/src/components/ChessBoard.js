

const BlackCell = () => {
    return(
        <div className="black cell"></div>
    )
}

const WhiteCell = () => {
    return(
        <div className="white cell"></div>
    )
}

const ChessBoard = () => {

    let rows = [];
    for (let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            rows.push(j%2 === 1 ? (i%2 === 0 ? <BlackCell/> : <WhiteCell/>) : ((i%2 === 0 ? <WhiteCell/> : <BlackCell/>)));
        }
    }
    return(
        <div className="chess-board-wrapper">
            <div className="chess-board">
                {rows}
            </div>
            <h2 className="div-title">Chess Board</h2>
        </div>
    )
}

export default ChessBoard;