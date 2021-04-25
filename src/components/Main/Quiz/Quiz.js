import React, {useState} from 'react'
import gif from "../../../assets/icons8-questions.svg"
import "./Quiz.scss"
import QuizApi from '../QuizApi/QuizApi'
import {connect} from "react-redux"
import {userActions} from '../../../redux/actions'
import userReducer from '../../../redux/reducers/userReducer'
import ReactTooltip from "react-tooltip";

function Quiz({cash, userReducer, incrementActions, decrementActions}) {
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
        setShow(true)
    }
  }

  const handleTypeQuiz = (type, answer) => {
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
    if (imageAnswer <= otherAnswer) {
      incrementActions(20);
    }else{
      decrementActions(20)
    }
    setShow(false)
  }


  const answerPublisher = (imageAnswer, otherAnswer, answer) => {
    if(imageAnswer == answer){
      incrementActions(20);
    }else{
      decrementActions(15)
    }
    setShow(false)
  }

  const answerName = (imageAnswer, otherAnswer, answer) => {
    if(imageAnswer == answer){
      incrementActions(20);
      
    }else{
      decrementActions(30)
    }
    setShow(false)
  }


  return (
    <>
    <div className="quiz-button">
      <img  data-tip data-for="quiz-button" className={cash > 15? "dollar" : "disable-dollar"} onClick={() => handleQuizApi()} src={gif} alt="dollar" />
    </div>
    <ReactTooltip id="quiz-button" place="top" type="dark" effect="float">
      <h4>Quiz game</h4>
      <p>It has tree types of questions</p>
      <p>If you answer correctly you recieve cash  - 20$</p>
      <p>Wrong - from 15 to 30$</p>
      <p>Price to play: 15$</p>
    </ReactTooltip>
    {show?  <QuizApi  left={leftImage} right={rightImage} answer ={quizType.answerRight}   leftImage={userReducer.gameList[leftImage]?.appid} rightImage={userReducer.gameList[rightImage]?.appid} answerFunction={quizType.answerFunction} question={quizType.question} /> : null }
    </>
  )
}




const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = {
  incrementActions: userActions.increment,
  decrementActions: userActions.decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
