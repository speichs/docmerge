import { combineReducers } from "redux"

import user from "./userReducer"
import file from "./fileReducer"
import showhide from './showhidereducer'
export default combineReducers({
  user,
  file,
  showhide
})
