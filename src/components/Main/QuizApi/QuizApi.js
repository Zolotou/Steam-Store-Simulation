import React, {useEffect, useState} from 'react'
import "./QuizApi.scss"
import {connect} from "react-redux"
import {userActions} from '../../../redux/actions'

const QuizApi = ({ close, show, userReducer, rightImage, leftImage, incrementActions}) => {
  

  const answer = (imageAnswer, otherAnswer) => {
    if(imageAnswer > otherAnswer){
      incrementActions(20);
      close()
    }
  }

 
  console.log(rightImage)
  console.log(leftImage)
  return (
    
    <>
      {show ? (
        <div  className="QuizApiWrapper">
          <div className="QuizApi">
            <div className="QuizApiImages">
              <img src={`https://steamcdn-a.akamaihd.net/steam/apps/${userReducer.gameList[leftImage].appid}/library_600x900.jpg`} alt="option1" onClick={()=> answer(leftImage, rightImage)} />
              <img src={`https://steamcdn-a.akamaihd.net/steam/apps/${userReducer.gameList[rightImage].appid}/library_600x900.jpg`} alt="option2" onClick={()=> answer(rightImage, leftImage)}/>
            </div>
            <div className="QuizApiQuestion">
              Which of two of this game have more audience?
            </div>
        </div>
        </div>
      ) : null}
    </>


  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = {
  incrementActions: userActions.increment,
}

export default connect(mapStateToProps, mapDispatchToProps) (QuizApi)
