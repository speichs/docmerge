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
      newState.dustbins[index].lastDroppedItem = item
      if(!newState.droppedBoxNames.includes(item.name)){
        newState.droppedBoxNames.push(item.name)
      }
      return newState
    }
  }
  return state
}
