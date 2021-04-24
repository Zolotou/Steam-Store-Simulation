

const SteamQuizCard = ({ id, question, answers, correctAnswer, clickHandler }) => {
    return (
        <div>
            <h1>{question}</h1>
            {
                answers.map((e, index) => <button key={index} onClick={(e) => clickHandler(e)}>{e}</button>)
            }
        </div>
    )

}

export default SteamQuizCard;