function instantiateSchema(schema){
  let obj = {}
  schema.forEach(e => obj[e.colName] = null)
  return obj
}

function mapData(schema, files){
  let frameObj = instantiateSchema(schema)
  let newData = [];
  for(let i = 0; i < files.length; i++){
    let data = files[i].data
    for(let j = 0; j < data.length; j++){
      let obj = Object.assign({}, frameObj)
      for(let k = 0; k < schema.length; k++){
        if(data[j].hasOwnProperty(schema[k].lastDroppedItem)){
          obj[schema[k].colName] = data[j][schema[k].lastDroppedItem]
        }
      }
      newData.push(obj)
    }
  }
  return newData
}

function updateMapData(schema, files, current){
  let frameObj = instantiateSchema(schema)
  for(let i = 0; i < files.length; i++){
    let data = files[i].data
    for(let j = 0; j < data.length; j++){
      let obj = Object.assign({}, frameObj)
      for(let k = 0; k < schema.length; k++){
        if(data[j].hasOwnProperty(schema[k].lastDroppedItem)){
          obj[schema[k].colName] = data[j][schema[k].lastDroppedItem]
        }
      }
      current.push(obj)
    }
  }
  return current
}

const initialState = {
  currentFile:{
    id:null,
    name:null,
    data: null,
    map: null,
    isProject: null,
  },
  currentProject:{
    id:null,
    name: null,
    data: null,
    map: null,
    isProject: true,
  },
  validColName: false,
  wasSaved:false,
  currentProjectSchema: [],
  droppedBoxNames:[],
  showHideSchemaMaker:false,
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
  sendingEmail:false,
  emailSent: false,
  updatingProjectFile: false,
  updatedProjectFile: false,
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
    case "CHANGE_VALID_NAME":{
      let bool = !state.validName
      return {...state, validName: bool}
    }
    case "NAME_CURRENT_PROJECT":{
      let proj = {...state.currentProject}
      proj.name = action.payload
      return {...state, currentProject: proj}
    }
    case "GOT_CURRENT_PROJECT":{
      let id = action.payload.id;
      let isShared = action.payload.shared;
      let copyCurrentProject = {}
      if(isShared=== "?true"){
        let data = action.payload.sharedFiles
        for(let i = 0; i < data.length; i++){
          if(data[i].id === id){
            copyCurrentProject.name = data[i].name;
            copyCurrentProject.data = data[i].data;
            copyCurrentProject.map = data[i].map;
            copyCurrentProject.isProject = data[i].isProject
            return {
              ...state,
              currentProject: copyCurrentFile,
              isSettingCurrent:false,
              associativeFiles: [],
              currentProjectSchema: copyCurrentProject.map,
              fetchedFiles: action.payload.ownedFiles,
              sharedFiles: action.payload.sharedFiles,
              showHideSchemaMaker:true,
            }
          }
        }
      }else{
        let data = action.payload.ownedFiles
        for(let i = 0; i < data.length; i++){
          if(data[i].id === id){
            copyCurrentProject.name = data[i].name;
            copyCurrentProject.data = data[i].data;
            copyCurrentProject.map = data[i].map;
            copyCurrentProject.isProject = data[i].isProject
            return {
              ...state,
              currentProject: copyCurrentProject,
              isSettingCurrent:false,
              associativeFiles: [],
              currentProjectSchema: copyCurrentProject.map,
              fetchedFiles: action.payload.ownedFiles,
              sharedFiles: action.payload.sharedFiles,
              showHideSchemaMaker:true,
            }
          }
        }
      }
    }
    case "SHOW_HIDE_SCHEMA_MAKER":{
      let bool = state.showHideSchemaMaker
      bool = !bool
      return {...state, showHideSchemaMaker: bool}
    }
    case "ADD_COL_TO_SCHEMA":{
      let copyCurrentProjectSchema = [...state.currentProjectSchema]
      copyCurrentProjectSchema.push({colName: action.payload, lastDroppedItem:null})

      return {
        ...state,
        currentProjectSchema: copyCurrentProjectSchema
      }
    }
    case "UPDATE_VALID_COL_NAME":{
      let bool = {...state.validColName}
      bool = !bool
      return {...state, validColName: bool}
    }
    case "DROP_ITEM":{
      let index = action.payload.index
      let item = action.payload.item
      let copyDropped = [...state.droppedBoxNames]

      if(!copyDropped.includes(item.name)){
        copyDropped.push(item.name)
      }else{
        copyDropped = copyDropped
      }

      let copySchema=[...state.currentProjectSchema]
      copySchema[index].lastDroppedItem = item.name
      copySchema[index].associatedFile = item.fileId

      return {
        ...state,
        currentProjectSchema:copySchema,
        droppedBoxNames: copyDropped
      }
    }
    case "MAKE_PROJECT_DATA":{
      let projectData = mapData(state.currentProjectSchema, state.associativeFiles);
      let copyProject = {...state.currentProject}
      copyProject.data = projectData;
      copyProject.map = [...state.currentProjectSchema]
      return {...state, currentProject: copyProject}
    }
    case "UPDATE_PROJECT_DATA":{
      let copyCurrent = [...state.currentProject.data]
      let projectData = updateMapData(state.currentProjectSchema, state.associativeFiles, copyCurrent)
      let copyProject = {...state.currentProject}
      copyProject.data = projectData;
      copyProject.map = [...state.currentProjectSchema]
      return {...state, currentProject: copyProject}
    }
    case "UPDATE_PROJECT_FILE":{
      return {...state, updatingProjectFile: true}
    }
    case "CLEAR_CURRENT_PROJECT":{
      let clearedProject = {
        id:null,
        name: action.payload,
        data: null,
        map: null,
        isProject: true,
      }
      return {
        ...state,
        currentProject : clearedProject,
        currentProjectSchema : [],
        droppedBoxNames : [],
        associativeFiles: [],
        wasSaved: false,
      }
    }
    case "UPDATE_PROJECT_FILE_FULFILLED":{
      return {...state, updatingProjectFile: false, updatedProjectFile: true}
    }
    case "UPDATE_PROJECT_FILE_REJECTED":{
      return {...state, error: action.payload}
    }

    case "CREATE_PROJECT_FILE":{
      return {...state, creatingFile: true}
    }
    case "CREATE_PROJECT_FILE_REJECTED":{
      return {...state, creatingFile:false, error: action.payload}
    }
    case "CREATE_PROJECT_FILE_FULFILLED":{
      let newFile = action.payload;
      let copyFetchedFileArray = [...state.fetchedFiles]
      copyFetchedFileArray.push(newFile);
      let copyCurrentProject = {...state.currentProject}
      copyCurrentProject.id = action.payload.id

      return {
        ...state,
        currentProject: copyCurrentProject,
        fetchedFiles: copyFetchedFileArray,
        creatingFile:false,
        createdFile:true,
        wasSaved:true
      }
    }
    case "SET_CURRENT_PROJECT":{
      return {
        ...state,
        currentProject: action.payload,
        currentProjectSchema: action.payload.map,
        wasSaved: true
      }
    }
    case "SEND_EMAIL":{
      return {...state, sendingEmail: true}
    }
    case "SEND_EMAIL_FULFILLED":{
      return {
        ...state,
        sendingEmail:false,
        emailSent: true
      }
    }
    case "SEND_EMAIL_REJECTED":{
      return {
        ...state,
        error: action.payload
      }
    }
  }
  return state
}
