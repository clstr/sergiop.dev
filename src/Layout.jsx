import React, { Component } from 'react'

export class Layout extends Component {
  render() {
    return (
      <>
        {this.props.children}
      </>
    )
  }
}