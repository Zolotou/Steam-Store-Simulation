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
  const [color, setColor] = useState(false);

  useEffect(() => {
    setColor(!color);
  }, [cash])

  const handleClick = () => {
    setState(!state);
    inventoryHandle();
  }


  useEffect(() => {

    setInterval(() => {
      let currentTime = new Date();

      let timeDifference = ((currentTime.getTime() - timer) / 1000).toFixed(0);
      setTime(timeDifference)
    }, 1000)

  }, []);

  let divisor_for_minutes = time % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  return (
    <div className={styles.stats}>
      <h2 className={`${color ? styles.cashWallet : null}`}>Wallet: <span>{cash}</span> $</h2>
      <h3>Timer: {minutes} mins {seconds} secs passed</h3>
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

