const initialState = {
  user:{
    id: null,
    firstName: null,
    lastName: null,
    email: null
  },
  fetching: false,
  fetched: false,
  error: null,
}

export default function reducer(state=initialState, action){
  switch (action.type){
    case "FETCH_USER": {
      return {...state, fetching: true}
    }
    case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_USER_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
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
  }
  return state
}
