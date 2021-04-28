import React, { useEffect, useState } from 'react'
import styles from "./EndGame.module.scss";
import { createPost } from "../../firebase"
import { connect } from "react-redux"
import { userActions } from '../../redux/actions'
import { Link } from 'react-router-dom';

function EndGame({ userReducer, endGameActions }) {
  const [nickname, setNickname] = useState("")

  const handleDifficulty = () => {
    if (userReducer.difficulty.level == 1) {
      return "Normal"
    }
    else if (userReducer.difficulty.level == 2) {
      return "Easy"
    }
    else return "Hard"
  }

  const showScoreboard = () => {
    const difficulty = handleDifficulty()

    createPost(difficulty, { name: nickname, score: userReducer.user.score })
    endGameActions();
  }

  const startNewGame = () => {
    const difficulty = handleDifficulty()

    createPost(difficulty, { name: nickname, score: userReducer.user.score })
    endGameActions();
  }

  return (
    <div className={styles.endGameWrapper}>
      <div className={styles.endGame}>
        <h2>Congratulations, the game was successfully completed!</h2>
        <p>Your score is: {userReducer.user.score} </p>
        <p>You finish the game in:</p>
        <div>
          <label>Enter your nickname:</label>
          <input value={nickname} onChange={(e) => setNickname(e.target.value)} type="text" placeholder="Player" required />
        </div>
        <div>
          <button onClick={() => startNewGame()}>Start a new game</button>
          <button><Link onClick={() => showScoreboard()} to="/score">Show scoreboard</Link></button>
        </div>
      </div>
    </div>

  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = {
  endGameActions: userActions.EndGame,
  decrementActions: userActions.decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(EndGame)
