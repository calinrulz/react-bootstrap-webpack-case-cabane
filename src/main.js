import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'

// Import Firebase
import * as firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDgbnjTomUht1w924yC8P5NiuRdwlA2m0c",
  authDomain: "case-cabane.firebaseapp.com",
  databaseURL: "https://case-cabane.firebaseio.com",
  storageBucket: "case-cabane.appspot.com",
  messagingSenderId: "1049956868119"
}

firebase.initializeApp(config)

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <AppContainer store={store} routes={routes} />,
    MOUNT_NODE
  )
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// ========================================================
// Go!
// ========================================================
render()
