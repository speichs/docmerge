import { combineReducers } from "redux"

import user from "./userReducer"
import file from "./fileReducer"
import dnd from "./dndReducer"
export default combineReducers({
  user,
   file,
    dnd,
})
