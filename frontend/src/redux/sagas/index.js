import { all } from 'redux-saga/effects'
import gameTitlesSaga from './gameTitles'
import questionsSaga from './questions'

export default function* rootSaga() {
  yield all([...gameTitlesSaga, ...questionsSaga])
}
