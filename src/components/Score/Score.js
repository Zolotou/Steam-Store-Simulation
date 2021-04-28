import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../../firebase'
import styles from "./Score.module.scss"

function Score() {
  const [loading, setLoading] = useState(false)
  const [allPosts, setAllPosts] = useState([])
  const [diff, setDiff] = useState("Normal");

  useEffect(() => {
    const fetchScore = async () => {
      const res = await getAllPosts("Normal");

      if (res) {
        setLoading(true)
        setAllPosts(res)
      } else {
        alert("something went wrong")
      }
    }

    fetchScore()

  }, [])

  const showScore = async (difficulty) => {
    if (diff !== difficulty) {
      setLoading(false)
      setDiff(difficulty)
      const res = await getAllPosts(difficulty);
      setAllPosts(res)
    }
  }
  console.log(allPosts)
  return (
    <div className={styles.scoreBoard}>
      <h1>ScoreBoard</h1>
      <div>
        <button onClick={() => showScore("Easy")}>EASY</button>
        <button onClick={() => showScore("Normal")}>NORMAL</button>
        <button onClick={() => showScore("Hard")}>HARD</button>
      </div>
      <h2>Difficulty level: {diff}</h2>
      <div className={styles.playersList}>
        {
          allPosts?.sort(function (a, b) {
            return b.score - a.score
          }).map((post, ind) => {
            return (
              <div className={styles.player} key={ind}>
                <p>{post.name}:</p>
                <p>{post.score}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Score
