import Wallet from "../../components/Main/Wallet/Wallet";
import GameField from "../../components/Main/GameField/GameField";

const Main = ({ takeName, nameOfTheGame }) => {
  return (
    <main className="main">
      <Wallet />
      <section>
        <p>Active Sise</p>
        <button onClick={takeName}>Show</button>
      </section>]
      <GameField />
      <section>
        <p>Game section</p>
        {nameOfTheGame}
      </section>

      <p>Start the project</p>
    </main>
  )
}

export default Main;