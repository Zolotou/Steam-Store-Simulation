import React, { useEffect, useState } from 'react'
import { changeDifficulty } from '../../../redux/actions/actions';


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
    <div className="Inventorybox">
      <div className="gamebox">
        <img data-tip data-for={game.name}  src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/library_600x900.jpg`} onError={e => e.currentTarget.src = "https://moofemp.com/image/grid-designs/pre-greenlight.png"} alt="picture" />
      </div>
      {gameInfo ?
        <div className="gameInfo">
          <h2>Name: {game.name}</h2>
          <h4>Developer: {gameInfo.developer}</h4>
          <p>Active current players: {gameInfo.ccu}</p>
          <p>Genre: {gameInfo.genre}</p>
        </div>
        : "Loading"
      }
    </div>

  )
}

export default InventoryGameBox
