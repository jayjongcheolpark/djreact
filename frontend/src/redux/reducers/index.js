import { combineReducers } from 'redux'
import gamesReducer from './games'

export default combineReducers({
  games: gamesReducer,
})
