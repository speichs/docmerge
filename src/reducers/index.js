import { combineReducers } from "redux"

import user from "./userReducer"
import file from "./fileReducer"
export default combineReducers({
  user,
   file
})
