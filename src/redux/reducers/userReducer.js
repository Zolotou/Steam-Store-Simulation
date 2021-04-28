const initialState = {
    gameList: [],
    user: {
        gameList: [],
        wallet: 0,
        score: 0,
    },
    difficulty: {
        level: 1,
        showInterface: false,
        timePassed: new Date()
    }
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET/GAMES':
            return {
                ...state,
                gameList: action.payload
            }
        case 'INCREMENT':
            return {
                ...state,
                user: {
                    ...state.user,
                    wallet: state.user.wallet + (action.payload * state.difficulty.level)
                }
            }
        case 'ENDGAME':
            return {
                ...state,
                user: {
                    gameList: [],
                    wallet: 0,
                    score: 0,
                },
                difficulty: {
                    level: 1,
                    showInterface: false
                }
            }
        case 'DECREMENT':
            return {
                ...state,
                user: {
                    ...state.user,
                    wallet: state.user.wallet - action.payload
                }
            }
        case 'BUYGAME':
            console.log(state.user.score);
            return {
                ...state,
                user: {
                    ...state.user,
                    wallet: state.user.wallet - action.payload[1],
                    gameList: [...state.user.gameList, state.gameList[action.payload[0]]],
                    score: state.user.score + action.payload[1] * 10
                }
            }
        case 'CHANGE_DIFFICULTY':
            return {
                ...state,
                difficulty: action.payload,
                timePassed: new Date().getTime()
            }
        case 'TIME_PASSED':
            return {
                ...state,
                difficulty: {
                    ...state.difficulty,
                    timePassed: new Date()
                }
            }
        default:
            return state
    }
}


export default userReducer;