import { useState } from "react";
import SteamQuizCard from "./SteamQuizCard";
import quizIcon from "../../assets/Quiz1.svg";
import styles from "./SteamQuiz.module.scss";
import { connect } from "react-redux";
import { userActions } from "../../redux/actions"
import ReactTooltip from "react-tooltip";

const questions = [
    {
        id: 1,
        question: "Which company developed the Steam?",
        answers: ["Valve", "Microsoft", "Epic Games", "Sony"],
        correctAnswer: "Valve"
    },
    {
        id: 2,
        question: "What year was the Steam launched?",
        answers: ["1997", "2000", "2003", "2006"],
        correctAnswer: "2003"
    },
    {
        id: 3,
        question: "Which game holds the record for the number of players online in the Steam?",
        answers: ["Dota2", "CS: GO", "PUBG", "GTA5"],
        correctAnswer: "PUBG"
    },
    {
        id: 4,
        question: "Who is the CEO of the company that owns the Steam platform?",
        answers: ["Bill Gates", "Tim Cook", "Gabe Newell", "Tim Sweeney"],
        correctAnswer: "Gabe Newell"
    },
    {
        id: 5,
        question: "How many Steam users have VR headsets?",
        answers: ["7%", "2%", "12%", "20%"],
        correctAnswer: "2%"
    },
    {
        id: 6,
        question: "Does the Steam store sell more than 50 thousand games?",
        answers: ["true", "false"],
        correctAnswer: "true"
    },
    {
        id: 7,
        question: "Possible names for the Steam could be «Grid» and «Gazelle»?",
        answers: ["true", "false"],
        correctAnswer: "true"
    },
    {
        id: 8,
        question: "Has the Steam platform lost leadership in terms of the number of users to its main competitor 'Epic Games Store' in 2021?",
        answers: ["true", "false"],
        correctAnswer: "false"
    },
    {
        id: 9,
        question: "At the end of 2020, there were more than 200 million monthly active players on the Steam platform?",
        answers: ["true", "false"],
        correctAnswer: "false"
    },
    {
        id: 10,
        question: "More than 60 million players use the Steam platform every day?",
        answers: ["true", "false"],
        correctAnswer: "true"
    },

];

const SteamQuiz = ({ incrementActions }) => {

    const [num, setNum] = useState(0);
    const [isQuiz, setIsQuiz] = useState(false);


    const clickHandler = (e) => {
        const answer = e.target.textContent;
        setNum(num + 1);
        if (answer === questions[num].correctAnswer) {
            incrementActions(20);

        }
    }


    return (
        <div>
            {isQuiz
                ? <div className={styles.quiz}>
                    <div className={styles.QuizWrapper}>
                        {questions[num]
                            ? <div className={styles.quiz}> <SteamQuizCard
                                key={questions[num].id}
                                id={questions[num].id}
                                question={questions[num].question}
                                answers={questions[num].answers}
                                correctAnswer={questions[num].correctAnswer}
                                clickHandler={clickHandler}
                            />
                                <button className={styles.success__closer} onClick={() => setIsQuiz(!isQuiz)} aria-label="Close"></button>
                            </div>
                            : <div className={styles.quiz}>
                                <div><h1>No more questions!</h1>
                                    <button className={styles.close} onClick={() => setIsQuiz(!isQuiz)}>Close</button>
                                    <button className={styles.success__closer} onClick={() => setIsQuiz(!isQuiz)} aria-label="Close"></button>
                                </div>
                            </div>
                        }</div>
                </div>
                : <div>
                    <img data-tip data-for="steam_quiz" className={styles.icon} src={quizIcon} alt="quiz_icon" onClick={() => setIsQuiz(!isQuiz)} />
                    <ReactTooltip id="steam_quiz" place="top" type="dark" effect="float">
                        <h4>Quiz game</h4>
                        <p>10 questions about Steam</p>
                        <p>Each correct answer - 20$</p>
                    </ReactTooltip>
                </div>

            }
        </div>
    )
}

const mapDispatchToProps = {
    incrementActions: userActions.increment,
}


export default connect(null, mapDispatchToProps)(SteamQuiz)
