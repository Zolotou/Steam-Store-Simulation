import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { userActions } from '../../../redux/actions'
import ReactTooltip from "react-tooltip";
import audioFile from "../../../assets/classic.mp3"
import { CSSTransition } from "react-transition-group"

function Gamebox({ game, userReducer, index, buyGameAction }) {
  const [audio] = useState(new Audio(audioFile));
  const [state, setState] = useState(true);
  const [price, setPrice] = useState(0);
  const [isPurchasing, setIsPurchasing] = useState(false)





  useEffect(() => {
    audio.volume = 0.3
    const floor = Math.floor((index + 1) / 10);
    setPrice(floor ? (floor * 5) + 5 : 5)
  }, [])

  const buyGame = () => {
    if (userReducer.user.wallet >= price) {
      audio.currentTime = 0
      audio.play();
      buyGameAction([index, price])
      setState(false)
    }
    else console.log("not enough money")
  }


  if (!state) return null;

  return (
    <>
      <CSSTransition
        in={!state}
        timeout={300}
        classNames="fade"
      >
        <div className={isPurchasing ? "small" : `${userReducer.user.wallet >= price ? "gamebox" : "gamebox-disable"}`} >
          <img data-tip data-for={game.name} onClick={() => {
            if (userReducer.user.wallet >= price) {
              setIsPurchasing(true);
            }
            setTimeout(() => {
              if(userReducer.user.wallet >= price){
                setIsPurchasing(false)
                buyGame();
              }
              
            }, 200)
          }} src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/library_600x900.jpg`} onError={e => e.currentTarget.src = "https://moofemp.com/image/grid-designs/pre-greenlight.png"} alt="picture" />
          <ReactTooltip id={game.name} place="top" type="dark" effect="float" >
            <h2>Name: {game.name}</h2>
            <h3>Price: ${price}</h3>
          </ReactTooltip>
        </div>
      </CSSTransition>
    </>

  )



}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = {
  buyGameAction: userActions.buyGame
}

export default connect(mapStateToProps, mapDispatchToProps)(Gamebox)
