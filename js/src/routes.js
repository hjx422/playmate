/**
 * Created by Administrator on 2018/5/14.
 */
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Index from './app/index.js'
import Example from './app/example/example.js'
import Example2 from './app/example2/example2.js'
import NavBar from './app/navBar/navBar.js'
import CreateActivity from './modules/createActivity'

let Page404 = () => (<div><h1>FIXME FIXME 404 404</h1></div>)

export default function getRoutes({ getState, dispatch }) {

  return (
    <Index>
      <NavBar/>
      <Switch>
        <Route exact path='/create' component={ CreateActivity } />
        <Route exact path='/' component={ Example } />
        <Route path='/e2' component={ Example2 } />
        <Route path='*' component={ Page404 } status={404}/>
      </Switch>
    </Index>
  )
}
