const initialState = {
  file:{
    id:null,
    headers: [],
    data: null
  },
  fetching:false,
  fetched:false,
  error:null,
  creatingFile:false,
  createdFile:true,
  redirect:false,
}

export default function reducer(state=initialState, action){
  switch(action.type){
    case "CREATE_FILE":{
      return {...state, creatingUser: true}
    }
    case "CREATE_FILE_REJECTED":{
      return {...state, creatingUser:false, error: action.payload}
    }
    case "CREATE_FILE_FULFILLED":{
      let newFile = {
        id: action.payload.id,
        headers: [],
        data: action.payload.data
      }
    }
  }
  return state
}
