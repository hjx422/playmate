/**
 * Created by Administrator on 2018/5/20.
 */
import { combineReducers } from 'redux'
import * as actionTypes from '../actions/actionTypes.js'

const initState = 'hello world'

export default function example(state = initState, action) {
  switch (action.type) {
    default :
      return state
  }
}
