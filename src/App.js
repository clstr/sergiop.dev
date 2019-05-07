import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { Home } from "./Home"
import { PageNotFound } from "./PageNotFound"


export default class App extends Component {
  
  componentDidMount() {
    document.title = "Sergio Palomino";
  }

  render() {
    return (
      <Router>
        <div>
        <Link className="App-link" to="/">Sergio Palomino</Link>
          <ul>
            <li><a className="App-link" href="https://github.com/clstr" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a className="App-link" href="https://www.linkedin.com/in/sergiopalomino/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}