import React from 'react'
import gif from "../../../assets/icons8-questions-100.png"
import "./Quiz.scss"

function Quiz() {
  return (
    <div>
      <img className="dollar" onClick={() =>  alert("Quiz game")} src={gif} alt="dollar" />
    </div>
  )
}

export default Quiz
