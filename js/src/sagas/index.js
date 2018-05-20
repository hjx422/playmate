/**
 * Created by Administrator on 2018/5/14.
 */
import { take, takeEvery, put, call, fork, race, cancelled } from 'redux-saga/effects'
import { delay, eventChannel, END } from 'redux-saga'
import * as actionTypes from '../actions/actionTypes.js'
import * as exampleSaga from './exampleSaga.js'

export default function* rootSaga() {
  yield takeEvery(actionTypes.GET_EXAMPLES_REQUEST, exampleSaga.getExamples)
}

/**
 * ��ȡaction.payload
 * saga��ֱ�ӽӴ�����,����saga����
 * @param func
 * @returns {mapFunc}
 */
function mapPayload(func) {
  return function* mapFunc(action) {
    return yield func.call(this, action.payload)
  }
}

