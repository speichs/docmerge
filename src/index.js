import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import Login from './components/Login.js'
import './styles/app.css'
import store from './store'
import { Provider } from "react-redux"


const main = document.getElementById('main')

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>, main
)
