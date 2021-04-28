import { Link } from "react-router-dom";
import styles from "./About.module.scss";
import github from "../../assets/github-icon-1.svg";
import linkedin from "../../assets/in2.svg";
import { useState } from "react";

const About = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setText("");
        alert("123")
    }

    return (
        <div className={styles.about}>
            <div className={styles.info}>
                <h2>Application "Steam Store Simulator" was created by Wild Code School students:</h2>
                <div className={styles.dev}>Arseny Maslov <Link to="https://github.com/Maslovars"><img className={styles.icon} src={github} alt="github" /></Link>|
                    <Link to="https://www.linkedin.com/in/arseniy-maslov/"><img className={styles.icon} src={linkedin} alt="linkedin" /></Link> </div>
                <div className={styles.dev}>Vadim Karulin <Link to="https://github.com/Zolotou"><img className={styles.icon} src={github} alt="github" /></Link>|
                    <Link to="https://www.linkedin.com/in/vadim-karulin/"><img className={styles.icon} src={linkedin} alt="linkedin" /></Link> </div>
            </div>
            <div className={styles.form__container}>
                <h2>Contact form</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label>Name:
            <input placeholder="Enter your name" type="text" value={name} onChange={handleChangeName} />
                    </label>
                    <label>Email:
                <input placeholder="Enter your email" type="email" value={email} onChange={handleChangeEmail} />
                    </label>
                    <textarea type="text" value={text} onChange={handleChangeText}></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default About;
