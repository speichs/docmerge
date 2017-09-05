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
  validColName: false,
  currentProjectSchema: [],
  droppedBoxNames:[],
  showHideSchemaMaker:true,
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
      console.log(projectData);
      let copyProject = {...state.currentProject}
      console.log(copyProject);
      copyProject.data = projectData;
      console.log(copyProject);
      copyProject.map = [...state.currentProjectSchema]
      console.log(copyProject);
      return {...state, currentProject: copyProject}
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
      return {
        ...state,
        fetchedFiles: copyFetchedFileArray,
        creatingFile:false,
        createdFile:true
      }
    }



  }
  return state
}
