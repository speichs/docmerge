const initialState = {
  currentFile:{
    id:null,
    name:null,
    data: null,
    map: null,
    isProject: null,
  },
  currentProject:{
    name: null,
    data: null,
    map: null,
    isProject: true,
  },
  associativeFiles:[],
  validName: false,
  isSettingCurrent:false,
  currentFileKeys:[],
  fetching:false,
  fetched:false,
  error:null,
  creatingFile:false,
  createdFile:true,
  redirect:false,
  fetchingOwnedFiles:false,
  fetchedOwnedFiles:false,
  fetchedFiles:[],
  filesExist:false,
  sharedFiles:[],
  fetchingSharedFiles: false,
  fetchedSharedFiles: false,
  sharesExist:false,
}

export default function reducer(state=initialState, action){
  switch(action.type){
    case "CREATE_FILE":{
      return {...state, creatingFile: true}
    }
    case "CREATE_FILE_REJECTED":{
      return {...state, creatingFile:false, error: action.payload}
    }
    case "CREATE_FILE_FULFILLED":{
      let newFile = action.payload;
      let copyFetchedFileArray = [...state.fetchedFiles]

      let copyAssociativeArray = [...state.associativeFiles]
      copyAssociativeArray.push(newFile)

      copyFetchedFileArray.push(newFile);
      return {
        ...state,
        fetchedFiles: copyFetchedFileArray, associativeFiles: copyAssociativeArray,
        creatingFile:false,
        createdFile:true
      }
    }
    case "GET_OWNED_FILES":{
      return {...state, fetchingOwnedFiles:true}
    }
    case "GET_OWNED_FILES_FULFILLED":{
      let files = action.payload
      return{
        ...state,
        fetchedFiles:files,
        fetchingOwnedFiles:false,
        fetchedOwnedFiles:true,
        filesExist:true
      }
    }
    case "GET_OWNED_FILES_REJECTED":{
      return {
        ...state,
        fetchingOwnedFiles:false,
        error:action.payload
      }
    }
    case "GET_SHARED_FILES":{
      return{...state, fetchingSharedFiles:true}
    }
    case "GET_SHARED_FILES_FULFILLED":{
      let files = action.payload;
      return{...state, sharedFiles: files, fetchingSharedFiles:false, fetchedSharedFiles:true, sharesExist:true}
    }
    case "GET_SHARED_FILES_REJECTED":{
      return{...state, fetchingSharedFiles:false, error: action.payload}
    }
    case "GETTING_CURRENT_FILES":{
      return {...state, isSettingCurrent:true}
    }
    case "CHANGE_VALID_NAME":{
      let bool = !state.validName
      return {...state, validName: bool}
    }
    case "NAME_CURRENT_PROJECT":{
      let proj = {...state.currentProject}
      proj.name = action.payload
      return {...state, currentProject: proj}
    }
    case "GOT_CURRENT_FILE":{
      let id = action.payload.id;
      let isShared = action.payload.shared;
      let currentFile = {...state.currentFile}
      let currentFileKeys = [...state.currentFileKeys]
      if(isShared=== "?true"){
        let data = [...state.sharedFiles]
        for(let i = 0; i < data.length; i++){
          if(data[i].id === id){
            currentFile = data[i];
            currentFileKeys = Object.keys(currentFile);
            return {...state, currentFile: currentFile, currentFileKeys: currentFileKeys, isSettingCurrent:false};
          }
        }
      }else{
        let data = [...state.fetchedFiles]
        for(let i = 0; i < data.length; i++){
          if(data[i].id === id){
            currentFile = data[i];
            currentFileKeys = Object.keys(currentFile);
            return {...state, currentFile: currentFile, currentFileKeys: currentFileKeys, isSettingCurrent:false};
          }
        }
      }
    }
  }
  return state
}
