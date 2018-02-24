import { GET_ALL_GAME_TITLES, GET_ALL_QUESTIONS_BY_GAME_TILE, CHANGE_HEALTH, RETRY_GAME } from '../constants'

export const getAllGameTitles = () => ({
  type: GET_ALL_GAME_TITLES,
})

export const getAllQuestionsByGameTitle = gameTitle => ({
  type: GET_ALL_QUESTIONS_BY_GAME_TILE,
  gameTitle,
})

export const changeHealth = amount => ({
  type: CHANGE_HEALTH,
  amount,
})

export const retryGame = () => ({
  type: RETRY_GAME,
})
