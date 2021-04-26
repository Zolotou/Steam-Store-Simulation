import styles from "./Stats.module.scss";
import {useState} from 'react'
import showInventory from "../../../assets/icons8-show-property.svg";
import hideInventory from "../../../assets/icons8-hide.svg"

function Stats({ cash, boughtGames, inventoryHandle }) {

  const [state, setState] = useState(true);

  const handleClick = () => {
    setState(!state)
    inventoryHandle()
  }


  return (
    <div className={styles.stats}>
      <h2>Wallet: {cash} $</h2>
      <h3>Games purchased: {boughtGames}</h3>
      <div onClick={() => handleClick()}>{state ? 
        <div>
          <img src={showInventory} alt="" srcset=""/>
          <p>show inventory</p>
        </div> : 
        <div>
        <img src={hideInventory} alt="" srcset=""/>
        <p>hide inventory</p>
      </div>}
      </div>
    </div>
  )
}

export default Stats
