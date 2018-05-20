/**
 * Created by Administrator on 2018/5/13.
 */
import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Root from './root.dev.js'
import configStore from './store/configStore.js'

const store = configStore()

ReactDom.render(
  <Root store={store} />,
  document.getElementById('root')
)
