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
