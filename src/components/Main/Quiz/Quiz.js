import React, {useState} from 'react'
import gif from "../../../assets/icons8-questions-100.png"
import "./Quiz.scss"
import QuizApi from '../QuizApi/QuizApi'
import {connect} from "react-redux"
import {userActions} from '../../../redux/actions'

function Quiz({cash, userReducer, incrementActions}) {
  console.log("QUiz")
  const [show, setShow] = useState(false);
  const [leftImage, setLeftImage] = useState(1);
  const [rightImage, setRightImage] = useState(1);
  const [quizType, setQuizType] = useState({
    answerFunction: null,
    answerRight: null,
    question: null
  });

  const handleQuizApi = () => {
    if(cash > 15) {
      
        let typeofQuestion = Math.floor(Math.random() * 3)
        const LeftImageNumber = Math.floor(Math.random() * 90);
        const RightImageNumber = Math.floor(Math.random() * 90);
        
        let answer = Math.floor(Math.random() * 2) ? LeftImageNumber : RightImageNumber;
        const questObject = handleTypeQuiz(typeofQuestion, answer)
        setLeftImage(LeftImageNumber);
        setRightImage(RightImageNumber);
        setQuizType(questObject)
        console.log(questObject, "quizType after handleType")
        setShow(true)
    }
  }

  const handleTypeQuiz = (type, answer) => {
    console.log(type, "type in handleType")
    
    switch(type){
      case 0:
          return {
            answerFunction: answerActivePlayers,
            answerRight: answer,
            question: "Which of this game has more active players?"
          }
      case 1:
          return {
            answerFunction: answerPublisher,
            answerRight: answer,
            question: `Which of this game has developer as ${userReducer.gameList[answer]?.developer} and publisher ${userReducer.gameList[answer]?.publisher} `
          }
      default:
          return {
            answerFunction: answerName,
            answerRight: answer,
            question: `Which of this is ${userReducer.gameList[answer]?.name}`
          }
    }
  }

  const answerActivePlayers = (imageAnswer, otherAnswer) => {
    if (imageAnswer < otherAnswer) {
      incrementActions(20);
      setShow(false)
    }
  }


  const answerPublisher = (imageAnswer, otherAnswer, answer) => {
    if(imageAnswer == answer){
      incrementActions(20);
      setShow(false)
    }
  }

  const answerName = (imageAnswer, otherAnswer, answer) => {
    if(imageAnswer == answer){
      incrementActions(20);
      setShow(false)
    }
  }


  return (
    <>
    <div className="quiz-button">
      <img className="dollar" onClick={() => handleQuizApi()} src={gif} alt="dollar" />
    </div>
    {show?  <QuizApi  left={leftImage} right={rightImage} answer ={quizType.answerRight}   leftImage={userReducer.gameList[leftImage]?.appid} rightImage={userReducer.gameList[rightImage]?.appid} answerFunction={quizType.answerFunction} question={quizType.question} /> : null }
    </>
  )
}




const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = {
  incrementActions: userActions.increment,
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
