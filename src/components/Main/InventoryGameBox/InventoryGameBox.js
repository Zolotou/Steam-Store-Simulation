import React, { useEffect, useState } from 'react'
import Loader from '../../Loader/Loader';
import styles from "./InventoryGameBox.module.scss"


function InventoryGameBox({ game, index }) {
  const [gameInfo, setGameInfo] = useState(false);

  const fetchGameData = async () => {
    const res = await fetch(`https://steamspy.com/api.php?request=appdetails&appid=${game.appid}`);
    const data = await res.json();
    setGameInfo(data)
  }

  useEffect(() => {
    fetchGameData()
  }, [])


  return (
    <div className={styles.inventoryBox}>
      <div className={styles.gameBox}>
        <img data-tip data-for={game.name} src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/library_600x900.jpg`} onError={e => e.currentTarget.src = "https://moofemp.com/image/grid-designs/pre-greenlight.png"} alt="game_icon" />
      </div>
      {gameInfo ?
        <div className={styles.gameInfo}>
          <h2>Name: {game.name}</h2>
          <h4>Developer: {gameInfo.developer}</h4>
          <p>Active current players: {gameInfo.ccu}</p>
          <p>Genre: {gameInfo.genre}</p>
        </div>
        : <div className={styles.loader}><Loader /></div>
      }
    </div>

  )
}

export default InventoryGameBox
