import { GET_ALL_GAME_TITLES_SUCCESS } from '../constants'

const gamesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_GAME_TITLES_SUCCESS: {
      return [...action.gameTitles]
    }
    default:
      return state
  }
}

export default gamesReducer
