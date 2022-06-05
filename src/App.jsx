import React from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6b8310271a43df0d59036e6fbeb28457`

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(API_URL).then((response) => {
        setData(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input 
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}ºC</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

{data.name != undefined &&
        <div className="bottom">
        <div className="feels">
          {data.main ? <p className="bold">{data.main.feels_like.toFixed()}ºC</p> : null}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
          {data.wind ? <p className="bold">{data.wind.speed.toFixed()}MPH</p> : null}
          <p>Wind Speed</p>
        </div>
      </div>
}



      </div>
    </div>
  );
}

export default App;
