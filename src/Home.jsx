import React, { Component } from 'react'
import logo from './68‌​7b‌​c8‌​3e‌​.JPG'

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Sergio Palomino</h1>
          <a className="App-link" href="https://github.com/clstr" target="_blank" rel="noopener noreferrer">Github</a>
          <a className="App-link" href="https://www.linkedin.com/in/sergiopalomino/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </React.Fragment>
    )
  }
}