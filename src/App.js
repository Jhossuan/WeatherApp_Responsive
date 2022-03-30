import React, { useEffect, useState } from 'react'
import Card from './components/Card';
import { Global } from './styles/Global';
import Searchbar from './components/Searchbar';

const api = {
  key: '7dcec3420b0b2dd68ec7fe68e9560e52',
  base: 'https://api.openweathermap.org/data/2.5/'
}

const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`
}


function App() {

  const [ciudad, setCiudad] = useState('')
  const [weather, setWeather] = useState({})

  const search = (e) => {
    if(e.key === 'Enter'){
    fetch(`${api.base}weather?q=${ciudad}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => setWeather(result))
    setCiudad('');
    }
  }

  return (
    <>
    <Global/>
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp >  16) ? 'App warm' : 'App') : 'App'}>
          <main>
            <Searchbar setCiudad={setCiudad} ciudad={ciudad} search={search}/>
            <Card weather={weather} dateBuilder={dateBuilder}/>
          </main>
        </div>
    </>
  );
}

export default App;
