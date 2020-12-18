// Fonts/Styles
import "typeface-press-start-2p"
import "nes.css/css/nes.min.css"
import "./index.css"

// Libs/Frameworks
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

// Components
import App from './App'

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root')

ReactDOM.render(
  <App />,
  rootElement
)

serviceWorker.unregister();