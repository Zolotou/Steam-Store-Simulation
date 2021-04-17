import React from 'react'

function Helper({cash, buyedGames}) {
  return (
    <div>
      <h2>Your goal: buy all the games</h2>
      {buyedGames > 0 ? `great: left to buy games: ${100 - buyedGames}`: null}
      <h3>{cash > 0 ? "great job keep doing it" : "Hint: click on $ icon"}</h3>
    </div>
  )
}

export default Helper
