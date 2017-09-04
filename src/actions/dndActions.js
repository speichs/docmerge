export function itemDrop(index, item){
  return {
    type: "DROP_ITEM",
    payload: {
      index: index,
      item: item
    }
  }
}

//export function addBin(id, name, data)
