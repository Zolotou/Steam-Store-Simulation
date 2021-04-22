import React from 'react'
import "./QuizApi.scss"


const QuizApi = ({show, leftImage, rightImage, answerFunction, question, left, right }) => {
  
  return (

    <>
      {show ? (
        <div className="QuizApiWrapper">
          <div className="QuizApi">
            <div className="QuizApiImages">
              <img src={`https://steamcdn-a.akamaihd.net/steam/apps/${leftImage}/library_600x900.jpg`} alt="option1" onClick={() => answerFunction(left, right)} />
              <img src={`https://steamcdn-a.akamaihd.net/steam/apps/${rightImage}/library_600x900.jpg`} alt="option2" onClick={() => answerFunction(right, left)} />
            </div>
            <div className="QuizApiQuestion">
              {question}
            </div>
          </div>
        </div>
      ) : null}
    </>


  )
}



export default QuizApi
