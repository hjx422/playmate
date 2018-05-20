/**
 * Created by Administrator on 2018/5/13.
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import getRoutes from './routes.js'

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            { getRoutes(store) }
          </div>
        </HashRouter>
      </Provider>
    )
  }
}
