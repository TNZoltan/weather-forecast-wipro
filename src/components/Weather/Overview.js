import React, { Component } from 'react'
import DayPreview from 'components/Weather/DayPreview'
import { DayFull } from 'components/Weather/DayFull'
import backgroundImg from 'assets/overview-bg.jpg'

const numberOfDays = 5

class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDayIndex: 0,
      days: false
    }
    this.listDays = this.listDays.bind(this)
    this.printDay = this.printDay.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.forecast && !this.state.days) {
      let days = []
      const todayAsInteger = new Date().getTime()
      const oneDayAsInteger = 1000 * 60 * 60 * 24
      for (let i = 0; i < numberOfDays; ++i) {
        const currentDay = new Date(todayAsInteger + (oneDayAsInteger * i))
        const daysIndex = currentDay.getDate()
        let day = {
          date: currentDay, forecast: []
        }
        for (let j = 0; j < nextProps.forecast.length; ++j) {
          let dayIndex = nextProps.forecast[j].dt_txt.substring(8, 10)
          if (daysIndex.toString() === dayIndex) {
            day.forecast.push(nextProps.forecast[j])
          }
        }
        days.push(day)
      }
      this.setState({ days: days })
    }
  }
  listDays() {
    if (this.state.days)
      return (
        <React.Fragment>
          {
            this.state.days.map((day, index) => {
              return <DayPreview key={index} forecast={day.forecast} date={day.date} selectDay={() => {
                this.setState({ selectedDayIndex: index })
              }} />
            })
          }
        </React.Fragment>
      )
    else return null
  }
  printDay() {
    const selectedIndex = this.state.selectedDayIndex
    if (this.state.days && selectedIndex >= 0)
      return <DayFull forecast={this.state.days[selectedIndex].forecast} date={this.state.days[selectedIndex].date} />
    else return null
  }
  render() {
    return (
      <div className="block block-overview" style={{ background: 'url(' + backgroundImg + ')' }}>
        {this.listDays()}
        {this.printDay()}
      </div>
    )
  }
}
export default Overview
