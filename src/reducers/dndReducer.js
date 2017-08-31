let initialState = {
      dustbins: [
        { accepts: ['glass'], lastDroppedItem: null },
        { accepts: ['food'], lastDroppedItem: null },
        { accepts: ['paper', 'glass'], lastDroppedItem: null },
        { accepts: ['paper'], lastDroppedItem: null },
      ],
      boxes: [
        { name: 'Bottle', type: 'glass' },
        { name: 'Banana', type: 'food' },
        { name: 'Magazine', type: 'paper' },
      ],
      droppedBoxNames: [],
    }

export default function reducer(state=initialState, action){
  switch(action.type){
    case "DROP_ITEM":{
      let newState = {...state}
      let newDustbins = [...newState.dustbins]

      console.log(newDustbins);
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
