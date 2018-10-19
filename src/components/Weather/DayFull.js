import React from 'react'

export const DayFull = (props) => {
  return (
    <div className="day-info rounded-corners">
      <h3>Rest of the data printed here...</h3>

      {JSON.stringify(props.forecast)}
    </div>
  )
}