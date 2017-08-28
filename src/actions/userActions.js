import axios from "axios";

export function fetchUser(){
  return {
    type: "FETCH_USER_FULFILLED",
    payload:{
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "test@gmail.com"
    }
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
