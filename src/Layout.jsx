import React, { Component } from 'react'

export class Layout extends Component {
  render() {
    return (
      <body>
        {this.props.children}
      </body>
    )
  }
}