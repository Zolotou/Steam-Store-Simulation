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
        timePassed: new Date(0)
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
            return {
                ...state,
                user: {
                    ...state.user,
                    wallet: state.user.wallet - action.payload[1],
                    gameList: [...state.user.gameList, state.gameList[action.payload[0]]]
                }
            }
        case 'CHANGE_DIFFICULTY':
            return {
                ...state,
                difficulty: action.payload
            }
        case 'TIME_PASSED':
            return {
                ...state,
                difficulty: {
                    ...state.difficulty,
                    timePassed: action.payload
                }
            }
        default:
            return state
    }
}


export default userReducer;