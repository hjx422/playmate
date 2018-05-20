/**
 * Created by Administrator on 2018/5/14.
 */
import { put, take, call, select } from 'redux-saga/effects'
//import { decamelizeKeys, camelizeKeys } from 'humps'
import * as actionTypes from '../actions/actionTypes.js'

export function* getExamples() {
  try {
    let response = yield new Promise((resolve, reject) => {
      resolve({
        zh: ['例子1', '例子2', '例子3', '例子4', '例子5'],
        en: ['example1', 'example2', 'example3', 'example4', 'example5']
      })
    })
    yield put({
      type: actionTypes.GET_EXAMPLES_SUCCESS,
      response: response.zh,
      meta: {
        lang: 'ZH'
      }
    })
    yield put({
      type: actionTypes.GET_EXAMPLES_SUCCESS,
      response: response.en,
      meta: {
        lang: 'EN'
      }
    })
  } catch (error) {
    yield put({ type: actionTypes.GET_EXAMPLES_FAILURE, error })
  }
}
