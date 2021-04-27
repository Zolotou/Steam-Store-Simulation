import React, { useEffect, useState } from 'react'
import "./EndGame.scss"
import { createPost } from "../../firebase"
import { connect } from "react-redux"
import { userActions } from '../../redux/actions'
import { Link } from 'react-router-dom';

function EndGame({ userReducer, endGameActions }) {
  const [nickname, setNickname] = useState("Player")

  const handleDifficulty = () => {
    if(userReducer.difficulty.level == 1){
      return "Normal"
    }
    else if(userReducer.difficulty.level == 2){
      return "Easy"
    }
    else return "Hard"
  }

  const showScoreboard = () => {
    const difficulty = handleDifficulty()

    createPost(difficulty, {name: nickname, score: userReducer.user.score})
    endGameActions();
  }

  const startNewGame = () => {
    const difficulty = handleDifficulty()

    createPost(difficulty, {name: nickname, score: userReducer.user.score})
    endGameActions();
  }

  return (
    <div className="endGameWrapper">
      <div className="endGame">
        <p>Game Over:</p>
        <p>Your score is: {userReducer.user.score} </p>
        <p>You finish the game in:</p>

        <label>Your nick:</label>
        <input value={nickname} onChange={(e) => setNickname(e.target.value)} type="text" />
        <button onClick={() => startNewGame()}>Start a new game</button>
        <Link onClick={() => showScoreboard()} to="/score">Show the other</Link>

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
