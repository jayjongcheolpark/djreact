import { GET_ALL_GAME_TITLES, GET_ALL_QUESTIONS_BY_GAME_TILE } from '../constants'

export const getAllGameTitles = () => ({
  type: GET_ALL_GAME_TITLES,
})

export const getAllQuestionsByGameTitle = gameTitle => {
  console.log(gameTitle)
  return {
    type: GET_ALL_QUESTIONS_BY_GAME_TILE,
    gameTitle,
  }
}
