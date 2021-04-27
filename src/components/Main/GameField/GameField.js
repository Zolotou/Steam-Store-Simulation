import React, {useEffect, useState} from 'react'
import './GameField.scss'
import Gamebox from '../Gamebox/Gamebox'

function GameField({list, purchaseList}) {
    const [gameList, setGameList] = useState([])
    useEffect(()=> {
        const filteredList = list.filter((game, index)=> {
            game.index = index;
            for(let purchGame of purchaseList){
                if(purchGame?.appid == game?.appid){
                    return false
                }
            }
            return true
        })
        setGameList(filteredList)
    }, [list])
    return (
        <div className="gameField" >
            {gameList.map((game, index) => <Gamebox key={game.appid} game={game} index={game.index}  />)}
        </div>
    )
}

export default GameField
