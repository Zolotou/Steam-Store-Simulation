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
        alert("Message sent successfully!")
    }

    return (
        <div className={styles.about}>
            <div className={styles.info}>
                <h2>Application "Steam Store Simulator" was created by Wild Code School students:</h2>
                <div className={styles.dev}>Arseny Maslov <div className={styles.links}><a href="https://github.com/Maslovars"><img className={styles.icon} src={github} alt="github" /></a>|
                <a href="https://www.linkedin.com/in/arseniy-maslov/"><img className={styles.icon} src={linkedin} alt="linkedin" /></a></div> </div>
                <div className={styles.dev}>Vadim Karulin <div className={styles.links}><a href="https://github.com/Zolotou"><img className={styles.icon} src={github} alt="github" /></a>|
                <a href="https://www.linkedin.com/in/vadim-karulin/"><img className={styles.icon} src={linkedin} alt="linkedin" /></a></div> </div>
            </div>
            <div className={styles.form__container}>
                <h2>Contact form</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input placeholder="Enter your name" type="text" value={name} onChange={handleChangeName} />
                    <input placeholder="Enter your email" type="email" value={email} onChange={handleChangeEmail} />
                    <textarea value={text} onChange={handleChangeText} placeholder="Type your message" cols="30" rows="5"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default About;
