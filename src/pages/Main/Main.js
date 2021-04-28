import Wallet from "../../components/Main/Wallet/Wallet";
import GameField from "../../components/Main/GameField/GameField";
import Helper from "../../components/Main/Helper/Helper"
import Stats from "../../components/Main/Stats/Stats"
import Quiz from "../../components/Main/Quiz/Quiz"
import Inventory from "../../components/Main/Inventory/Inventory"
import EndGame from "../../components/EndGame/EndGame"

import { connect } from "react-redux"
import { userActions } from '../../redux/actions'
import { useEffect, useState } from 'react';
import "./Main.scss"
import Levels from "../../components/Levels/Levels";
import SteamQuiz from "../../components/SteamQuiz/SteamQuiz";


const Main = ({ incrementActions, getGameAction, userReducer }) => {
  const [list, setList] = useState(false)
  const [endGame, SetEndGame] = useState(true)

  const inventoryHandle = () => {
    setList(!list);
  }

  const fetchUserData = async () => {
    getGameAction()
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  useEffect(() => {
    if (userReducer.user.gameList >= 100) {
      SetEndGame(true);
    }
  }, [userReducer.user?.gameList])



  return (
    <main className="main">
      <section className="leftSide">
        {userReducer.difficulty.showInterface
          ? <div className="interface">
            <Stats inventoryHandle={inventoryHandle} cash={userReducer.user.wallet}
              boughtGames={userReducer.user.gameList.length} timer={userReducer?.timePassed} />
            <div className="gameActions">
              <Wallet onMoney={incrementActions} cash={userReducer.user.wallet} />
              <Quiz cash={userReducer.user.wallet} />
              <SteamQuiz />
            </div>
            <Helper cash={userReducer.user.wallet} boughtGames={userReducer.user.gameList.length} />
          </div>
          : <div className="levels"><Levels /></div>}
      </section>
      {list ? <Inventory list={userReducer.user.gameList} /> : <GameField list={userReducer.gameList} purchaseList={userReducer.user.gameList} />}
      {endGame ? <EndGame /> : null}
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