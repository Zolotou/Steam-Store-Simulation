<<<<<<< HEAD:src/components/Main/Main.js
import Wallet from "./Wallet/Wallet";

const Main = ({ takeName, nameOfTheGame }) => {
  return (
    <main className="main">
      <Wallet />
      <section>
        <p>Active Sise</p>
        <button onClick={takeName}>Show</button>
      </section>
      <section>
        <p>Game section</p>
        {nameOfTheGame}
      </section>

      <p>Start the project</p>
    </main>
  )
=======
const Main = ({takeName, nameOfTheGame}) => {
    return (
        <main className="main">
            
          <section>
             <p>Active Sise</p>
            <button onClick={takeName}>Show</button>
          </section>
          <section>
            <p>Game section</p>
            {nameOfTheGame}
          </section>
        
        <p>Start  project</p>
        </main>
    )
>>>>>>> eb2d4a99180f91cab8e48cd6d514ffdc2a531af8:src/pages/Main/Main.js
}

export default Main;