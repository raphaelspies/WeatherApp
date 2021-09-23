import React from 'react'
import './styles.css';

export default function Card (props) {
  // const day = (new Date(props.weather.date)).getDay();
  // const tempMaxF = props.weather.temp_max_f;
  // const tempMinF = props.weather.temp_min_f;
  // const icon = props.weather.Timeframes[0].icon

  const day = ((new Date(props.weather.dt * 1000)).toString()).slice(0, 3)
  const tempMaxF = Math.floor(props.weather.temp.max);
  const tempMinF = Math.floor(props.weather.temp.min);
  const weatherIconCode = props.weather.weather[0].icon
  const weatherIcon = <img src={`http://openweathermap.org/img/wn/${weatherIconCode}@2x.png`}/>

  return (
    <div className="card">
    <p/>
      <div className="card-header-weekday">{day}</div>
      <div className="body-icon">{weatherIcon}</div>
      <div className="temperatures">{tempMaxF}° {tempMinF}°</div>
    </div>
  )
}