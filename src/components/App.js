import React, {useState, useEffect}  from 'react'
import './App.css';
import Axios from 'axios'
import Card from './Card.jsx'

const API_KEY="71b79c785e848817c3c53cf4e8fb9f3a"
const lat="33.691359"
const lon="-118.322756"
const URL=`http://api.weatherunlocked.com/api/forecast/${lat},${lon}?app_id=3fa93b11&app_key=${API_KEY}`

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
        {!isLoaded ? "Loading" : weather.Days.map((day) => {
          return (<Card weather={day} key={day.date}/>)
        })}
      </header>
    </div>
  );
}

export default App;
