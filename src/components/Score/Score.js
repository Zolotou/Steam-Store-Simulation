import React, {useEffect, useState} from 'react'
import { getAllPosts } from '../../firebase'

function Score() {
  const [loading, setLoading] = useState(false)
  const [allPosts, setAllPosts] = useState([])
  const [diff, setDiff] = useState("Normal");

  useEffect(() => {
    const fetchScore = async () => {
      const res = await getAllPosts("Normal");

      if (res){
        setLoading(true)
        setAllPosts(res)
      }else{
        alert("something went wrong")
      }
    }

    fetchScore()

  }, [])

  const showScore = async (difficulty) => {
    if(diff !== difficulty){
      setLoading(false)
      setDiff(difficulty)
      const res = await getAllPosts(difficulty);
      setAllPosts(res)
    }
  }

  return (
    <div className="Score">
      <h1>ScoreBoard</h1>
      <button onClick={()=> showScore("Easy")}>EASY</button>
      <button onClick={()=> showScore("Normal")}>NORMAL</button>
      <button onClick={()=> showScore("Hard")}>HARD</button>
      <div className="ScoreBoard">
        {
          allPosts?.map((post, ind) => {
            return (
              <div key={ind}>
                <h2>{post.name}</h2>
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
