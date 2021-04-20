import { Link, NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
import logo from "../../assets/Steam_icon_logo.svg";
import github from "../../assets/github-icon-1.svg";
import linkedin from "../../assets/linkedin-icon-1.svg";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__body}>
                <NavLink exact to="/"><img src={logo} alt="logo" /></NavLink>
                <div className={styles.nav}>
                    <NavLink activeClassName={styles.active} exact to="/">Main</NavLink>
                    <NavLink activeClassName={styles.active} to="/score" >Score</NavLink>
                    <NavLink activeClassName={styles.active} to="/about">About</NavLink>
                </div>
                <div>
                    <div>Arseny Maslov <Link to="https://github.com/Maslovars"><img className={styles.icon} src={github} alt="github" /></Link> |
                    <Link to="https://www.linkedin.com/in/arseniy-maslov/"><img className={styles.icon} src={linkedin} alt="linkedin" /></Link> </div>
                    <div>Vadim Karulin <Link to="https://github.com/Zolotou"><img className={styles.icon} src={github} alt="github" /></Link> |
                    <Link to="https://www.linkedin.com/in/vadim-karulin/"><img className={styles.icon} src={linkedin} alt="linkedin" /></Link> </div>
                </div>
            </div>
            <div className={styles.copyright}>© 2021 Minsk Belarus Wild Code School</div>
        </footer>
    )
}

export default Footer;


/*
redux
    actions
        gameAction.js
            startGame(data = true): return {
                type: StartGame,
                payload: true
            }
            GetCoin()
    actionsTypes
        gameActionType.js
            START_GAME = "GAME/START_GAME"
            GET_COIN = "GAME/GET_COIN"
    redusers
        gameReduces.js
            game: {
                gameIsStart: false
                coins:
                totalsum:
                gameName:
            }


            switch

                case payload.type:
                    return newState(
                        {
                            ...oldState,
                            gameIsStart: payload.data
                        }
                    )
    store.js

*/