import axios from "axios";

export function fetchUser(user){
  return function(dispatch){
    dispatch({type:'LOGIN_USER'})
    axios.post('token', user).then((response) => {
      dispatch({type: "LOGIN_USER_FULFILLED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "LOGIN_USE_REJECTED",
      payload: err})
    })
  }
}

export function setFirstName(first){
  return {
    type: "SET_FIRSTNAME",
    payload: first
  }
}

export function setLastName(last){
  return {
    type: "SET_LASTNAME",
    payload: last
  }
}

export function setEmail(email){
  return{
    type: "SET_EMAIL",
    payload: email
  }
}

export function setPassword(password){
  return {type:"SET_PASSWORD",
  payload: password}
}

export function createUser(userInfo){
  return function(dispatch){
    dispatch({type: "CREATE_USER"})
    axios.post("users",userInfo)
    .then((response)=>{
      dispatch({type: "CREATE_USER_FULFILLED", payload: response.data})
    })
    .catch((err)=>{
      dispatch({type:"CREATE_USER_REJECTED", payload: err})
    })
  }
}
