import React from 'react'

function Stats({cash, buyedGames}) {
  return (
    <div>
      <p>Wallet: {cash} $</p>
      <p>Games in inventory: {buyedGames}</p>
      <button onClick={()=> <p>Hey</p>}>Show inventory</button>
    </div>
  )
}

export default Stats
