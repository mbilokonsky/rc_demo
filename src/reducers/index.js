import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import serverState from './server.js'

const todoApp = combineReducers({
  serverState,
  todos,
  visibilityFilter
})

export default todoApp