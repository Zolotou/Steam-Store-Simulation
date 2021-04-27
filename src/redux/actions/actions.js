export const increment = (payload) => ({
  payload,
  type: 'INCREMENT'
})

export const decrement = (payload) => ({
  payload,
  type: 'DECREMENT'
})

export const getGame = () => {
  return async (dispatch) => {
    try {

      const res = await fetch('http://steamspy.com/api.php?request=top100in2weeks');
      const data = await res.json();
      const array = Object.entries(data).map((item) => ({ ...item[1] })).sort((first, second) => second.ccu - first.ccu)
      if (res) {
        dispatch({ type: 'GET/GAMES', payload: array });
        return true
      } else {
        return false;
      }
    } catch (error) {
      console.log("error", error);
      return false;
    }
  };
}

export const EndGame = (payload) => ({
  payload,
  type: 'ENDGAME'
})


export const buyGame = (payload) => ({
  payload,
  type: 'BUYGAME'
})

export const changeDifficulty = (payload) => ({
  payload,
  type: 'CHANGE_DIFFICULTY'
})

export const timePassed = (payload) => ({
  payload,
  type: 'TIME_PASSED'
})
