// Libs/Frameworks
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import { Home } from "./Home"
import { PageNotFound } from "./PageNotFound"
import { Layout } from "./Layout"
export default class App extends Component {

  componentDidMount() {
    document.title = "Sergio Palomino";
  }

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