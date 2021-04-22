import React, {useState} from 'react'
import gif from "../../../assets/icons8-questions-100.png"
import "./Quiz.scss"
import QuizApi from '../QuizApi/QuizApi'

function Quiz({cash}) {
  const [show, setShow] = useState(false);
  const [leftImage, setLeftImage] = useState(0);
  const [rightImage, setRightImage] = useState(0);

  const handleQuizApi = () => {
    if(cash > 15) {
      setLeftImage(Math.floor(Math.random() * 99));
      setRightImage(Math.floor(Math.random() * 99))
      setShow(true)
      
    }
  }

  const closeQuizApi = () => {
    setShow(false)
  }

  return (
    <div className="quiz-button">
      <QuizApi close={closeQuizApi} show={show} leftImage={leftImage} rightImage={rightImage} />
      <img className="dollar" onClick={handleQuizApi} src={gif} alt="dollar" />
    </div>
  )
}




export default Quiz
