const initialState = {
    gameList: [],
    user: {
        gameList: [],
        wallet: 0
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
                    wallet: state.user.wallet + action.payload
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
        default:
            return state
    }
}


export default userReducer;