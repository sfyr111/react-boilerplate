// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'

export default combineReducers({ router: routerReducer })
