import React from 'react'
import './GameField.scss'
import Gamebox from '../Gamebox/Gamebox'

function GameField({list}) {
    return (
        <div className="gameField">
            {list.map((game, index) => <Gamebox key={game.appid} game={game} index={index}  />)}
            
        </div>
    )
}

export default GameField
