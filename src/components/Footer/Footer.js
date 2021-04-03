const Footer = () => {
    return (
        <footer>Footer</footer>
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