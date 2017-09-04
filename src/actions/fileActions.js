import axios from 'axios'

export function createFile(f){
  return function(dispatch){
    dispatch({type:"CREATE_FILE"})
    axios.post("files", f)
    .then((response)=>{
      dispatch({type:"CREATE_FILE_FULFILLED", payload: response.data})
    })
    .catch((err)=>{
      dispatch({type:"CREATE_FILE_REJECTED", payload:err})
    })
  }
}

export function getOwnedFiles(id){
  return function(dispatch){
    dispatch({type:"GET_OWNED_FILES"})
    axios.get(`/files/${id}`)
    .then((response)=>{
      dispatch({type:"GET_OWNED_FILES_FULFILLED", payload: response.data})
    })
    .catch((err)=>{
      dispatch({type:"GET_OWNED_FILES_REJECTED", payload:err})
    })
  }
}

//insert a shareFile function

export function getSharedFiles(id){
  return function(dispatch){
    dispatch({type:"GET_SHARED_FILES"})
    axios.get(`http://localhost:8080/share/${id}`)
    .then((response)=>{
      dispatch({type:"GET_SHARED_FILES_FULFILLED", payload: response.data})
    })
    .catch((err)=>{
      dispatch({type:"GET_SHARED_FILES_REJECTED", payload:err})
    })
  }
}

export function getCurrentFile(id, shared){
  return function(dispatch){
    dispatch({type:"GETTING_CURRENT_FILES"})
    dispatch({
      type: "GOT_CURRENT_FILE",
      payload: {
        id: id,
        shared: shared
      }
    })
  }
}

export function changeValidName(){
  return {type: "CHANGE_VALID_NAME"}
}

export function nameCurrentProject(name){
  return {type: "NAME_CURRENT_PROJECT", payload: name}
}
