import { takeEvery, call, put } from 'redux-saga/effects'
import { GET_ALL_GAME_TITLES, GET_ALL_GAME_TITLES_SUCCESS } from '../constants'
import * as API from '../../utils/api'

function* getAllGameTitlesSaga() {
  const gameTitles = yield call(API.getAllGameTitles)
  yield put({
    type: GET_ALL_GAME_TITLES_SUCCESS,
    gameTitles,
  })
}

const gameTitlesSaga = [takeEvery(GET_ALL_GAME_TITLES, getAllGameTitlesSaga)]
export default gameTitlesSaga
