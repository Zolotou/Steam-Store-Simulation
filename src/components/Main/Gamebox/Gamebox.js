import React, {useState} from 'react'
import {connect} from "react-redux"
import {userActions} from '../../../redux/actions'

function Gamebox({game, userReducer, index, buyGameAction}) {
  const [state,setState] = useState(true)

  const buyGame = () => {
    if(userReducer.user.wallet > 10){
      buyGameAction(index)
      setState(false)
    }
    else console.log("not enough money")
  }

  if(!state) return null
  
  return (
    <div className={userReducer.user.wallet > 10 ? "gamebox" : "gamebox-disable"} onClick={() => buyGame()}>
      <img src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/library_600x900.jpg`} alt="picutre" />
      <p>{game.name}</p>
    </div>
  )


 
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = {
  incrementActions: userActions.increment,
  getGameAction: userActions.getGame,
  buyGameAction: userActions.buyGame
}

export default connect(mapStateToProps, mapDispatchToProps) (Gamebox)
