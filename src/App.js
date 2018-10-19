import React, { Component } from 'react'
import { fetchForecastByCity } from 'functions/requests'
import './App.css'
import Overview from 'components/Weather/Overview'
import Filter from 'components/Weather/Filter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      forecast: []
    }
  }
  componentWillMount() {
    fetchForecastByCity().then(data => {
      this.setState({ forecast: data.list })
    }).catch(errorMessage => {
      this.setState({ statusMessage: errorMessage, status: 'error' })
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className={`status-message ${this.state.status}`}>
          {this.state.statusMessage}
        </div>
        <div id="weather-forecast">
          <Filter />
          <Overview forecast={this.state.forecast} />
        </div>
      </React.Fragment>
    );
  }
}

export default App
