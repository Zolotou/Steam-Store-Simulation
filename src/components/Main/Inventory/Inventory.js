import React from 'react'
import './Inventory.scss'
import InventoryGameBox from '../InventoryGameBox/InventoryGameBox'

function Inventory({ list }) {
  return (
    <div className="inventoryField">
      {list.map((game, index) => <InventoryGameBox key={game.appid} game={game} index={index} />)}
    </div>
  )
}

export default Inventory
