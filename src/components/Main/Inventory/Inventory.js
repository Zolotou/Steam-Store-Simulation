import React from 'react'
import './Inventory.scss'
import Gamebox from '../Gamebox/Gamebox'
import InventoryGameBox from '../InventoryGameBox/InventoryGameBox'

function Inventory({list, show}) {
  return (
    <div className={show? "gameField" : "hideField"}>
        {list.map((game, index) => <InventoryGameBox key={game.appid} game={game} index={index} />)}       
    </div>
  )
}

export default Inventory
