import React, {useState, useEffect}  from 'react'
import './styles.css';
import Axios from 'axios'
import Card from './Card.jsx'

const lat="33.691359"
const lon="-118.322756"
// const API_KEY="71b79c785e848817c3c53cf4e8fb9f3a"
// const URL=`http://api.weatherunlocked.com/api/forecast/${lat},${lon}?app_id=3fa93b11&app_key=${API_KEY}`
const API_KEY=`27217e9604ac8afb647d64da44c724a2`
const URL= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&appid=${API_KEY}&units=imperial`

function App() {
const [weather, setWeather] = useState([])
const [isLoaded, setIsLoaded] = useState(false)

  function getWeather (lat, lon, part) {
    Axios.get(URL)
    .then(res => {
      console.log(res.data)
      setWeather(res.data)
      setIsLoaded(true)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getWeather(33.691359, -118.322756, "alerts")
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        WeatherApp
      </header>
      <div className="App-body">
        {/* {!isLoaded ? "Loading" : weather.Days.map((day) => {
                    return (<Card weather={day} key={day.date}/>) */}

        {!isLoaded ? "Loading" : weather.daily.slice(0, 5).map((day) => {
          return (<Card weather={day} key={day.dt}/>)
        })}
      </div>
    </div>
  );
}

export default App;
