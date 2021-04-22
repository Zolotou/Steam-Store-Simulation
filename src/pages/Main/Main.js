import Wallet from "../../components/Main/Wallet/Wallet";
import GameField from "../../components/Main/GameField/GameField";
import { connect } from "react-redux"
import { userActions } from '../../redux/actions'
import { useEffect } from 'react';
import "./Main.scss"
import Levels from "../../components/Levels/Levels";
import SteamQuiz from "../../components/SteamQuiz/SteamQuiz";

const Main = ({ incrementActions, getGameAction, userReducer }) => {


  const fetchUserData = async () => {
    getGameAction()
  }

  useEffect(() => {
    fetchUserData()
  }, [])



  return (
    <main className="main">
      <section>
        <Levels />
        <SteamQuiz />
        <Wallet onMoney={incrementActions} cash={userReducer.user.wallet} />
        <p>Buyed games: {userReducer.user.gameList.length}</p>
        <button>Show</button>
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