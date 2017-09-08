const initialState = {
  isCreateNew:false,
  wasDropped:false,
  toggleShare:false,
}

export default function reducer(state=initialState, action){
  switch (action.type) {
    case "TOGGLE_NAME_PROJECT":{
      let bool = state.isCreateNew
      bool = !bool
      return {...state, isCreateNew:bool}
    }
    case "TOGGLE_DROP_COLOR":{
      let bool = state.wasDropped
      bool = !bool
      return {...state, wasDropped: bool}
    }
    case "TOGGLE_SHARE":{
      let bool = state.toggleShare
      bool = !bool
      return {...state, toggleShare: bool}
    }
  }
  return state
}
