import styles from "./Stats.module.scss";
import {useState} from 'react'

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
      <button onClick={() => handleClick()}>{state ? "Show inventory" : "hide Inventory"}</button>
    </div>
  )
}

export default Stats
