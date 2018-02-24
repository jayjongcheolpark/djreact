import { all } from 'redux-saga/effects'
import gameTitlesSaga from './gameTitles'

export default function* rootSaga() {
  yield all([...gameTitlesSaga])
}
