import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Layout } from "./Layout"
import { Home } from "./Home"
import { PageNotFound } from "./PageNotFound"

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Layout>
    )
  }
}