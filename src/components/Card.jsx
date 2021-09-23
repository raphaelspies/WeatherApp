import React from 'react'

export default function Card (props) {
  const day = (new Date(props.weather.date)).getDay();

  const tempMaxF = props.weather.temp_max_f;
  const tempMinF = props.weather.temp_min_f;
  const icon = props.weather.Timeframes[0].icon

  return (
    <>
    <p/>
      <div className="header-weekday">{day}</div>
      <div className="body-icon">{icon}</div>
      <div className="temperatures">{tempMaxF} {tempMinF}</div>
    </>
  )
}