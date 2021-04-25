import { Link, NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
import github from "../../assets/github-icon-1.svg";
import linkedin from "../../assets/in2.svg";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__body}>
                    {/* <NavLink exact to="/"><img src={logo} alt="logo" /></NavLink> */}
                    <div className={styles.nav}>
                        <NavLink activeClassName={styles.active} exact to="/">Main</NavLink>
                        <NavLink activeClassName={styles.active} to="/score" >Score</NavLink>
                        <NavLink activeClassName={styles.active} to="/about">About</NavLink>
                    </div>
                    <div className={styles.contact__info}>
                        <div className={styles.dev}>Arseny Maslov <Link to="https://github.com/Maslovars"><img className={styles.icon} src={github} alt="github" /></Link>|
                    <Link to="https://www.linkedin.com/in/arseniy-maslov/"><img className={styles.icon} src={linkedin} alt="linkedin" /></Link> </div>
                        <div className={styles.dev}>Vadim Karulin <Link to="https://github.com/Zolotou"><img className={styles.icon} src={github} alt="github" /></Link>|
                    <Link to="https://www.linkedin.com/in/vadim-karulin/"><img className={styles.icon} src={linkedin} alt="linkedin" /></Link> </div>
                    </div>
                </div>
                <div className={styles.copyright}>© 2021 Minsk Belarus Wild Code School</div>
            </div>
        </footer>
    )
}

export default Footer;