import React from 'react'
import "./QuizApi.scss"


const QuizApi = ({ leftImage, rightImage, answerFunction, question, left, right, answer }) => {
  return (

    <>
        <div className="QuizApiWrapper">
          <div className="QuizApi">
            <div className="QuizApiImages">
              <img className="Quiz-Img" src={`https://steamcdn-a.akamaihd.net/steam/apps/${leftImage}/library_600x900.jpg`} alt="option1" onClick={() => answerFunction(left, right, answer)} />
              <img className="Quiz-Img" src={`https://steamcdn-a.akamaihd.net/steam/apps/${rightImage}/library_600x900.jpg`} alt="option2" onClick={() => answerFunction(right, left, answer)} />
            </div>
            <div className="QuizApiQuestion">
              <p className="QuizText">{question}</p>
            </div>
          </div>
        </div>
    </>


  )
}



export default QuizApi
