import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import Login from './components/Login.js'
import './styles/app.scss'
//import { AppContainer } from 'react-hot-loader'
import store from './store'
import { Provider } from "react-redux"

// const render = Component => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('main')
//   )
// }
//
// render(Login)
// if (module.hot) {
//   module.hot.accept('./components/app', () => { render(App) })
// }

const main = document.getElementById('main')

ReactDOM.render(
  <Provider store={store}>
  <App></App>
</Provider>, main
)
