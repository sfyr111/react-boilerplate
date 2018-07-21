import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

// import persistState from 'redux-localstorage'

import createHistory from 'history/createBrowserHistory'
// import createHistory from 'history/createHashHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

// import VConsole from 'vconsole'

import reducers from './reducer'

import App from './App'

import './common/js/flexible'
import './common/stylus/index.styl'
import './index.styl'

// if (process.env.NODE_ENV === 'development') {
//   const vConsole = new VConsole()
//   console.log(vConsole)
// }

const history = createHistory()
const routeMiddleware = routerMiddleware(history)

const store = createStore(reducers, compose(
  applyMiddleware(thunk, routeMiddleware),
  // persistState('user'),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
))

const root = document.getElementById('root')

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  ), root,
)
