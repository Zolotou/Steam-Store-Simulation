import styles from "./Stats.module.scss";
import { useEffect, useState, useRef } from 'react'
import showInventory from "../../../assets/icons8-show-property.svg";
import hideInventory from "../../../assets/icons8-hide.svg"
import { connect } from "react-redux";
import { userActions } from "../../../redux/actions";
import { TransitionGroup, CSSTransition } from "react-transition-group"

function Stats({ cash, boughtGames, inventoryHandle, timer }) {

  const [state, setState] = useState(true);
  const [time, setTime] = useState("");

  useEffect(() => {
    
  }, [cash])

  const handleClick = () => {
    setState(!state)
    inventoryHandle()
  }

  
  useEffect(() => {

    setInterval(() => {
      let currentTime = new Date();

      let timeDifference = ((currentTime.getTime() - timer) / 1000).toFixed(0);
      setTime(timeDifference)
    }, 1000)

  }, []);


  return (
    <div className={styles.stats}>
      <h2>Wallet: <span className="cash-wallet">{cash}</span> $</h2>
      <h3>Timer: {time} seconds passed</h3>
      <h3>Games purchased: {boughtGames}</h3>
      <div onClick={() => handleClick()}>
        {state ?
          <div className={styles.icon}>
            <img src={showInventory} alt="ShowInventory" />
            <p>show inventory</p>
          </div> :
          <div className={styles.icon}>
            <img src={hideInventory} alt="hideInventory" />
            <p>hide inventory</p>
          </div>}
      </div>
    </div>
  )
}


const mapDispatchToProps = {
  timePassedAction: userActions.timePassed
}

export default connect(null, mapDispatchToProps)(Stats)

