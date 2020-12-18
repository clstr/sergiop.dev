import React, { Component } from 'react'

export class Layout extends Component {
  render() {
    return (
      <div id="nescss">
        <div className="container">
          <main className="main-content">
            {this.props.children}
          </main>
        </div>
      </div>
    )
  }
}