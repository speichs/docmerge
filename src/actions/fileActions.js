import axios from 'axios'

export function createFile(f){
  return function(dispatch){
    dispatch({type:"CREATE_FILE"})
    axios.post("https://doc-merge.herokuapp.com/files", f)
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
    axios.get(`https://doc-merge.herokuapp.com/files/${id}`)
    .then((response)=>{
      dispatch({type:"GET_OWNED_FILES_FULFILLED", payload: response.data})
    })
    .catch((err)=>{
      dispatch({type:"GET_OWNED_FILES_REJECTED", payload:err})
    })
  }
}

export function setCurrentProject(obj){
  return function(dispatch){
    dispatch({
      type:"SET_CURRENT_PROJECT",
      payload: obj
    })
  }
}

export function getSharedFiles(id){
  return function(dispatch){
    dispatch({type:"GET_SHARED_FILES"})
    axios.get(`https://doc-merge.herokuapp.com/share/${id}`)
    .then((response)=>{
      dispatch({type:"GET_SHARED_FILES_FULFILLED", payload: response.data})
    })
    .catch((err)=>{
      dispatch({type:"GET_SHARED_FILES_REJECTED", payload:err})
    })
  }
}

export function getCurrentFile(id, shared, sharedFiles, ownedFiles){
  return function(dispatch){
    dispatch({
      type: "GOT_CURRENT_FILE",
      payload: {
        id: id,
        shared: shared,
        sharedFiles: sharedFiles,
        ownedFiles: ownedFiles,
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

export function showHideSchemaMaker(){
  return {type: "SHOW_HIDE_SCHEMA_MAKER"}
}

export function addColToSchema(col){
  return {type: "ADD_COL_TO_SCHEMA", payload: col}
}

export function updateValidColName(){
  return {type: "UPDATE_VALID_COL_NAME"}
}

export function itemDrop(index, item){
  return {
    type: "DROP_ITEM",
    payload:{
      index:index,
      item:item
    }
  }
}

export function makeProjectData(user){
  return function(dispatch){
    dispatch({type: "MAKE_PROJECT_DATA"})
  }
}

export function createProjectFile(f){
  return function(dispatch){
    dispatch({type:"CREATE_PROJECT_FILE"})
    axios.post("https://doc-merge.herokuapp.com/projects", f)
    .then((response)=>{
      dispatch({type:"CREATE_PROJECT_FILE_FULFILLED", payload: response.data})
    })
    .catch((err)=>{
      dispatch({type:"CREATE_PROJECT_FILE_REJECTED", payload:err})
    })
  }
}

export function sendEmail(obj){
  return function(dispatch){
    dispatch({type:"SEND_EMAIL"})
    axios.post("https://doc-merge.herokuapp.com/email", obj)
    .then((response)=>{
      dispatch({type:"SEND_EMAIL_FULFILLED", payload: response.data})
    })
    .catch((err)=>{
      dispatch({type:"SEND_EMAIL_REJECTED", payload:err})
    })
  }
}

export function updateProjectData(){
  return function(dispatch){
    dispatch({type: "UPDATE_PROJECT_DATA"})
  }
}

export function updateProjectFile(obj){
  return function(dispatch){
    dispatch({type:"UPDATE_PROJECT_FILE"})
    let id = obj.data.id
    axios.patch(`https://doc-merge.herokuapp.com/projects/${id}`, obj)
    .then((response)=>{
      dispatch({type:"UPDATE_PROJECT_FILE_FULFILLED", payload: response.data})
    })
    .catch((err)=>{
      dispatch({type:"UPDATE_PROJECT_FILE_REJECTED", payload:err})
    })
  }
}

export function clearCurrentProject(name){
  return function(dispatch){
    dispatch({type: "CLEAR_CURRENT_PROJECT", payload:name})
  }
}

export function shareProject(obj){
  return function(dispatch){
    dispatch({type: "SHARE_PROJECT"})
    axios.post("https://doc-merge.herokuapp.com/share", obj)
    .then((response)=>{
      dispatch({type:"SHARE_PROJECT_FULFILLED", payload: response.data})
    })
    .catch((err)=>{
      dispatch({type:"SHARE_PROJECT_REJECTED", payload:err})
    })
  }
}
