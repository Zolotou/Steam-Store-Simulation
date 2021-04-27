import styles from "./Stats.module.scss";
import { useEffect, useState } from 'react'
import showInventory from "../../../assets/icons8-show-property.svg";
import hideInventory from "../../../assets/icons8-hide.svg"
import { connect } from "react-redux";
import { userActions } from "../../../redux/actions";

function Stats({ cash, boughtGames, inventoryHandle, timer }) {

  const [state, setState] = useState(true);
  const [time, setTime] = useState(0);

  const handleClick = () => {
    setState(!state)
    inventoryHandle()
  }
  useEffect(() => {

       

    setInterval(() => {
      let currentTime =new Date();
      
      let timeDiffrence = ((currentTime.getTime() - timer)/1000).toFixed(0); 
      setTime(timeDiffrence)
    }, 1000)
    // const timerCounter =
    //   setInterval(() => setTime(time + 1), 1000);
    // timePassedAction(time)

    // return () => clearInterval(timerCounter);

  }, []);


  return (
    <div className={styles.stats}>
      <h2>Wallet: {cash} $</h2>
      <h3>Timer: {time} seconds passed</h3>
      <h3>Games purchased: {boughtGames}</h3>
      <div onClick={() => handleClick()}>{state ?
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

