import styles from "./Helpers.module.scss"

function Helper({ cash, boughtGames }) {
  return (
    <div className={styles.helpers}>
      <h2>Your goal: buy all the games!</h2>
      {boughtGames > 0 ? <h3>{`great: left to buy games: ${100 - boughtGames}`}</h3> : null}
      <div className={styles.hint}>{cash > 0 ? "Great job keep doing it" : "Hint: click on $ or quiz icon"}</div>
    </div>
  )
}

export default Helper
