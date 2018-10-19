import React, { Component } from 'react'

const dayLiterals = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

class DayPreview extends Component {
  constructor(props) {
    super(props)
    this.getLowestTemperature = this.getLowestTemperature.bind(this)
    this.getHighestTemperature = this.getHighestTemperature.bind(this)
  }
  printDayName(dayInt) {
    const today = new Date().getDay()
    if (today === dayInt)
      return 'Today'
    if (today + 1 === dayInt)
      return 'Tomorrow'
    return dayLiterals[dayInt]
  }
  getLowestTemperature() {
    let lowest = Math.round(this.props.forecast[0].main.temp_min)
    for (let i = 0; i < this.props.forecast.length; ++i) {
      if (lowest > Math.round(this.props.forecast[i].main.temp_min)) {
        lowest = Math.round(this.props.forecast[i].main.temp_min)
      }
    }
    return lowest
  }
  getHighestTemperature() {
    let highest = Math.round(this.props.forecast[0].main.temp_max)
    for (let i = 0; i < this.props.forecast.length; ++i) {
      if (highest < Math.round(this.props.forecast[i].main.temp_max)) {
        highest = Math.round(this.props.forecast[i].main.temp_max)
      }
    }
    return highest
  }
  render() {
    if (this.props.forecast.length > 0) {
      let i = 0
      const currentHour = new Date().getHours()
      while (currentHour > new Date(this.props.forecast[i].dt_txt).getHours()) {
        if (i === this.props.forecast.length-1) break
        ++i
      }
      return (
        <div className="day rounded-corners" onClick={this.props.selectDay}>
          <h2>{this.printDayName(this.props.date.getDay())}</h2>
          {this.props.forecast[i].weather[0].main}
          <h1 className="current">
            {Math.round(this.props.forecast[i].main.temp)} °C
          </h1>
          {this.getLowestTemperature()} / {this.getHighestTemperature()} °C
        </div>
      )
    } else return null
  }
}

export default DayPreview
