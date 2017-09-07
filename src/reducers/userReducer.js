const initialState = {
  user:{
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  },
  fetching: false,
  fetched: false,
  error: null,
  creatingUser: false,
  createdUser: false,
  redirect:false,
  header:null,
}

export default function reducer(state=initialState, action){
  switch (action.type){
    case "LOGIN_USER": {
      return {...state, fetching: true}
    }
    case "LOGIN_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
    }
    case "LOGIN_USER_FULFILLED": {
      let newUserObj = {...state.user}
      newUserObj = action.payload.data
      newUserObj.password = null
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: newUserObj,
        header: document.cookie
      }
    }
    case "SET_FIRSTNAME":{
      let newUserObj = {...state.user}
      newUserObj.firstName = action.payload
      let newState = {...state, user:newUserObj}
      return newState
    }
    case "SET_LASTNAME":{
      let newUserObj = {...state.user}
      newUserObj.lastName = action.payload
      let newState = {...state, user:newUserObj}
      return newState
    }
    case "SET_EMAIL":{
      let newUserObj = {...state.user}
      newUserObj.email = action.payload
      let newState = {...state, user:newUserObj}
      return newState
    }
    case "SET_PASSWORD":{
      let newUserObj = {...state.user}
      newUserObj.password = action.payload
      let newState = {...state, user:newUserObj}
      return newState
    }
    case "CREATE_USER":{
      return {...state, creatingUser: true}
    }
    case "CREATE_USER_REJECTED":{
      return {...state, creatingUser:false, error: action.payload}
    }
    case "CREATE_USER_FULFILLED":{
      let newUserObj = {...state.user}
      newUserObj = {
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: null,
      }
      let newState = {
        ...state,
        user:newUserObj,
        creatingUser:false,
        createdUser:true,
        redirect:true,
        header: document.cookie
      }
      return newState
    }
    case "REMOVE_HEADER":{
      return initialState
    }
  }
  return state
}
