let initialState = {
      dustbins: [],
      droppedBoxNames: [],
    }
export default function reducer(state=initialState, action){
  switch(action.type){
    case "DROP_ITEM":{
      let newState = {...state}
      let newDustbins = [...newState.dustbins]
      newDustbins[action.payload.index].lastDroppedItem = action.payload.item
      newState.dustbins = newDustbins
      if(!newState.droppedBoxNames.includes(action.payload.item.name)){
        newState.droppedBoxNames.push(action.payload.item.name)
      }
      return newState
    }
  }
  return state
}
