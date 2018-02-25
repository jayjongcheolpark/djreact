import { combineReducers } from 'redux'
import gamesReducer from './games'
import questionsReducer from './questions'
import healthReducer from './health'

export default combineReducers({
  games: gamesReducer,
  questions: questionsReducer,
  health: healthReducer,
})
