import styles from "./Stats.module.scss";

function Stats({ cash, boughtGames }) {
  return (
    <div className={styles.stats}>
      <h2>Wallet: {cash} $</h2>
      <h3>Games purchased: {boughtGames}</h3>
      <button onClick={() => <p>Hey</p>}>Show inventory</button>
    </div>
  )
}

export default Stats
