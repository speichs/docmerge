import { applyMiddleware, createStore } from "redux"
import logger from  "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from './reducers'

//NOTE: at the end you are going to need to remove logger so that the console does not display all of the state changes

const middleware = applyMiddleware(thunk, logger)
const store = createStore(reducer, middleware)

export default store
