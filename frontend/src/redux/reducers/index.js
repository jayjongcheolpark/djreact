import { combineReducers } from 'redux'
import gamesReducer from './games'
import questionsReducer from './questions'

export default combineReducers({
  games: gamesReducer,
  questions: questionsReducer,
})
