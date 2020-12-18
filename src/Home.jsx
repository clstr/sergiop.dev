import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <section className="showcase">
        <section className="nes-container with-title is-centered">
          <h3 className="title">SERGIO PALOMINO</h3>
          <div id="sns-icons" className="item">
            <section className="icon-list">
              <a href="https://github.com/clstr" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon github is-large" />
              </a>
              &nbsp;
              <a href="https://www.linkedin.com/in/sergiopalomino/" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon linkedin is-large" />
              </a>
            </section>
            <i className="nes-charmander"/>
          </div>
        </section>
      </section>
    )
  }
}