import { takeLatest } from 'redux-saga/effects'

function* getTestSaga(action) {

}

const testSaga = [takeLatest('test', getTestSaga)]
export default testSaga