import styles from "./SteamQuizCard.module.scss";

const SteamQuizCard = ({ question, answers, clickHandler }) => {
    return (
        <div className={styles.card}>
            <h1>{question}</h1>
            {
                answers.map((e, index) => <button className={styles.btn} key={index} onClick={(e) => clickHandler(e)}>{e}</button>)
            }
        </div>
    )

}

export default SteamQuizCard;