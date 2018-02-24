import { takeEvery, call, put } from 'redux-saga/effects'
import { GET_ALL_QUESTIONS_BY_GAME_TILE, GET_ALL_QUESTIONS_BY_GAME_TILE_SUCCESS } from '../constants'
import * as API from '../../utils/api'

function* getAllQuestionsByGameTitleSaga() {
  const questions = yield call(API.getAllQuestionsByGameTitle)
  console.log(questions)
  yield put({
    type: GET_ALL_QUESTIONS_BY_GAME_TILE_SUCCESS,
    questions,
  })
}

const questionsSaga = [takeEvery(GET_ALL_QUESTIONS_BY_GAME_TILE, getAllQuestionsByGameTitleSaga)]
export default questionsSaga
