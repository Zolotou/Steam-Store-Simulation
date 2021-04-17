import React, {useState} from 'react'
import {connect} from "react-redux"
import {userActions} from '../../../redux/actions'
import ReactTooltip from "react-tooltip";

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
      <img data-tip data-for={game.name} src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/library_600x900.jpg`} onError={e => e.currentTarget.src= "https://moofemp.com/image/grid-designs/pre-greenlight.png"} alt="picture" />
      <ReactTooltip id={game.name} place="top" type="dark" effect="float" >
        <h2>Name: {game.name}</h2>
        <h3>Price: 10$</h3>
      </ReactTooltip>
      <p>{game.name}</p>
    </div>
  )


 
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = {
  buyGameAction: userActions.buyGame
}

export default connect(mapStateToProps, mapDispatchToProps) (Gamebox)
