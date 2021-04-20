import { useState, useEffect } from "react";
import styles from "./Levels.module.scss"

const Levels = () => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        if (time > 0) {
            setTimeout(() => setTime(time - 1), 1000);
        } else {
            setTime(0);
        }
    }, [time]);
    return (
        <div>
            <div>Select the difficulty level</div>
            <div>
                <button className={styles.btn} disabled={time > 0} onClick={() => setTime(30)}>Easy</button>
                <button className={styles.btn} disabled={time > 0} onClick={() => setTime(25)}>Normal</button>
                <button className={styles.btn} disabled={time > 0} onClick={() => setTime(15)}>Hard</button>
            </div>
            <div>Time left: {time} seconds</div>
        </div>
    )
}

export default Levels;
