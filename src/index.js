import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import App from './App'
import './index.css'

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter basename={"/"}>
    <App />
  </BrowserRouter>,
  rootElement
)

serviceWorker.unregister();