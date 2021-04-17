import Wallet from "../../components/Main/Wallet/Wallet";
import GameField from "../../components/Main/GameField/GameField";
import Helper from "../../components/Main/Helper/Helper"
import Stats from "../../components/Main/Stats/Stats"
import Quiz from "../../components/Main/Quiz/Quiz"
import {connect} from "react-redux"
import {userActions} from '../../redux/actions'
import {useEffect} from 'react';
import "./Main.scss"

const Main = ({incrementActions,getGameAction, userReducer}) => {

  
  const fetchUserData = async () => {
    getGameAction()
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  


  return (
    <main className="main">
      <section className="leftSide">
        <Stats cash={userReducer.user.wallet} buyedGames={userReducer.user.gameList.length} />
        <div className="gameActions">
          <Wallet onMoney={incrementActions} cash={userReducer.user.wallet} />
          <Quiz />
        </div>
        <Helper cash={userReducer.user.wallet} buyedGames={userReducer.user.gameList.length} />
      </section>
      <GameField list={userReducer.gameList} />
      
    </main>
  )
}


const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = {
    incrementActions: userActions.increment,
    getGameAction: userActions.getGame
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);