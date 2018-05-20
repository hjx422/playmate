/**
 * Created by Administrator on 2018/5/13.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

const saga = createSagaMiddleware()

const finalCreateStore = compose(
  applyMiddleware(saga, thunk)
)(createStore)

export default function configStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)
  saga.run(rootSaga)

  if (module.hot) {
    // Enable webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
