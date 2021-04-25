import { NavLink } from "react-router-dom";
import logo from "../../assets/Steam_icon_logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__body}>
                    <NavLink exact to="/"><img src={logo} alt="logo" /></NavLink>
                    <NavLink activeClassName={styles.active} exact to="/">Main</NavLink>
                    <NavLink activeClassName={styles.active} to="/score" >Score</NavLink>
                    <NavLink activeClassName={styles.active} to="/about">About</NavLink>
                    <div>Login</div>
                </div>
            </div>
        </header>
    )
}

export default Header;