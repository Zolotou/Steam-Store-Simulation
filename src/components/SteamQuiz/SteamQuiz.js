import { useState } from "react";
import SteamQuizCard from "./SteamQuizCard";
import quizIcon from "../../assets/Quiz1.svg";
import styles from "./SteamQuiz.module.scss";
import { connect } from "react-redux";
import { userActions } from "../../redux/actions"

const questions = [
    {
        id: 1,
        question: "Which company developed the Steam?",
        answers: ["Valve", "Microsoft", "Epic Games", "Sony"],
        correctAnswer: "Valve"
    },
    {
        id: 2,
        question: "What year did the Steam launch?",
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
    const [quiz, setQuiz] = useState(true);


    const clickHandler = (e) => {
        const answer = e.target.textContent;
        setNum(num + 1);
        if (answer === questions[num].correctAnswer) {
            incrementActions(20);

        }
    }


    return (
        <div>
            {quiz
                ? <img className={styles.icon} src={quizIcon} alt="quiz_icon" onClick={() => setQuiz(false)} />
                : <div>{questions[num] ? <SteamQuizCard
                    key={questions[num].id}
                    id={questions[num].id}
                    question={questions[num].question}
                    answers={questions[num].answers}
                    correctAnswer={questions[num].correctAnswer}
                    clickHandler={clickHandler}
                />
                    : "No more questions"}</div>
            }
        </div>
    )
}

const mapDispatchToProps = {
    incrementActions: userActions.increment,
}


export default connect(null, mapDispatchToProps)(SteamQuiz)
