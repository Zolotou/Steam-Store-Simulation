import React, {useState} from 'react'
import gif from "../../../assets/icons8-questions-100.png"
import "./Quiz.scss"
import QuizApi from '../QuizApi/QuizApi'
import {connect} from "react-redux"
import {userActions} from '../../../redux/actions'

function Quiz({cash, userReducer, incrementActions}) {
  const [show, setShow] = useState(false);
  const [leftImage, setLeftImage] = useState(1);
  const [rightImage, setRightImage] = useState(1);
  const [quizType, setQuizType] = useState({
    answerFunction: console.log(),
    answerRight: 10,
    question:"123"
  });

  const handleQuizApi = async () => {
    if(cash > 15) {
      let typeofQuestion = Math.floor(Math.random() * 3)
      setLeftImage(Math.floor(Math.random() * 90));
      setRightImage(Math.floor(Math.random() * 90))
      console.log(leftImage)
      console.log(rightImage)
      handleTypeQuiz(typeofQuestion)
      setShow(true)
      
    }
  }

  const handleTypeQuiz = (type) => {
    let answer = Math.floor(Math.random() * 2) ? leftImage : rightImage;
    switch(type){
      case 0:
        setQuizType({
          answerFunction: answerActivePlayers,
          answerRight: answer,
          question: "Which of this game has more active players?"
        })
        break;
      case 1:
        setQuizType({
          answerFunction: answerPublisher,
          answerRight: answer,
          question: `Which of this game has developer as ${userReducer.gameList[answer]?.developer} and publisher ${userReducer.gameList[answer]?.publisher} `
        })
        break;
      default:
        setQuizType({
          answerFunction: answerName,
          answerRight: answer,
          question: `Which of this is ${userReducer.gameList[answer]?.name}`
        })
        break;
    }
  }

  const answerActivePlayers = (imageAnswer, otherAnswer) => {
    console.log(quizType)
    if (imageAnswer < otherAnswer) {
      incrementActions(20);
      setShow(false)
    }
  }


  const answerPublisher = (imageAnswer, otherAnswer) => {
    console.log(imageAnswer)
    console.log(quizType)
    if(imageAnswer == quizType.answerRight){
      incrementActions(20);
      setShow(false)
    }
  }

  const answerName = (imageAnswer, otherAnswer) => {
    console.log(imageAnswer)
    console.log(quizType)
    if(imageAnswer == quizType){
      incrementActions(20);
      setShow(false)
    }
  }


  return (
    <div className="quiz-button">
      <QuizApi  show={show} left={leftImage} right={rightImage}   leftImage={userReducer.gameList[leftImage]?.appid} rightImage={userReducer.gameList[rightImage]?.appid} answerFunction={quizType.answerFunction} question={quizType.question} />
      <img className="dollar" onClick={() => handleQuizApi()} src={gif} alt="dollar" />
    </div>
  )
}




const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = {
  incrementActions: userActions.increment,
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
