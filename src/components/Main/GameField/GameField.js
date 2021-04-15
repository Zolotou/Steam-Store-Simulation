import React from 'react'

function GameField({list}) {
    return (
        <div>
            {list.map(game => <h1>{game.name}</h1>)}
            <h1>This is a GameField Section</h1>
        </div>
    )
}

export default GameField
