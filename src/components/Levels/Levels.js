import styles from "./Levels.module.scss";
import { userActions } from "../../redux/actions"
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";

const Levels = ({ changeDifficulty }) => {
    // const [time, setTime] = useState(0);
    // useEffect(() => {
    //     if (time > 0) {
    //         setTimeout(() => setTime(time - 1), 1000);
    //     } else {
    //         setTime(0);
    //     }
    // }, [time]);
    return (
        <div className={styles.levels}>
            <h2>Select the difficulty level:</h2>
            <div>
                <button data-tip data-for="easy" className={styles.btn} onClick={() => changeDifficulty({ level: 2, showInterface: true })}>Easy</button>
                <ReactTooltip id="easy" place="top" type="dark" effect="float">
                    <h4>You will receive x2 from the money earned</h4>
                </ReactTooltip>
                <button data-tip data-for="normal" className={styles.btn} onClick={() => changeDifficulty({ level: 1, showInterface: true })}>Normal</button>
                <ReactTooltip id="normal" place="top" type="dark" effect="float">
                    <h4>You will receive x1 from the money earned</h4>
                </ReactTooltip>
                <button data-tip data-for="hard" className={styles.btn} onClick={() => changeDifficulty({ level: 0.5, showInterface: true })}>Hard</button>
                <ReactTooltip id="hard" place="top" type="dark" effect="float">
                    <h4>You will receive x0.5 from the money earned</h4>
                </ReactTooltip>
            </div>
            {/* <button className={styles.btn} disabled={time > 0} onClick={() => setTime(30)}>Hard</button> */}
            {/* <div>Time left: {time} seconds</div> */}
        </div>
    )
}

const mapDispatchToProps = {
    changeDifficulty: userActions.changeDifficulty

}

export default connect(null, mapDispatchToProps)(Levels)


