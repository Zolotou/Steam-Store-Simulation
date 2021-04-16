export const increment = (payload) => ({
  payload,
  type: 'INCREMENT'
})

export const getGame = (dispatch) => {
  return async (dispatch) => {
    try {
      
      const res = await fetch('http://steamspy.com/api.php?request=top100in2weeks');
      const data = await res.json();
      const array = Object.entries(data).map((item) => ({ ...item[1] })).sort((first, second) => second.ccu - first.ccu)
      if (res) {
        dispatch({type: 'GET/GAMES', payload: array});
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


export const buyGame = (payload) => ({
   payload,
   type: 'BUYGAME'
})
