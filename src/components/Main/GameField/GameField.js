import React from 'react'

function GameField({list}) {
    return (
        <div className="gameField">
            {list.map(game => <div className="gamebox" key={game.appid}>{game.name}</div>)}
            
        </div>
    )
}

export default GameField
