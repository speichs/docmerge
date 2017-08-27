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
