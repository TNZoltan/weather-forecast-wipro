import React, { Component } from 'react'

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="block block-filter">
        <h1 className="title">
          Weather Forecast for WiPro Digital
        </h1>

        <hr />

        <h3>Chosen city: </h3>
        <h2>Dublin, Ireland</h2>
        Different input fields here to change the content on the right.
        <br/><br/>
        <select onChange={() => {
          this.setState({changed: true})
        }}>
          <option>Dublin</option>
          <option>London</option>
          <option>Paris</option>
          <option>New York</option>
        </select> {this.state.changed ? 'Told you nothing will happen' : 'This is just decoration'}
      </div>
    );
  }
}

export default Filter
