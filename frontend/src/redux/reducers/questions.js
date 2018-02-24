import { GET_ALL_QUESTIONS_BY_GAME_TILE_SUCCESS } from '../constants'

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_QUESTIONS_BY_GAME_TILE_SUCCESS: {
      return [...action.questions]
    }
    default:
      return state
  }
}

export default questionsReducer
