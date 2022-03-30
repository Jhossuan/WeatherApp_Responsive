import React from 'react'
import { ContainerLeft, ContainerRight } from '../styles/Card.style'

const card = ({weather, dateBuilder}) => {
  return (
    <div className='container'>
        {(typeof weather.main != "undefined") ? (
        <div>

        <ContainerLeft>
        <p className='date'>📅{dateBuilder(new Date())}</p>
            <p className='name-city'>{weather.name}, {weather.sys.country}</p>
        </ContainerLeft>

        <ContainerRight>
            <p className='temp'>{Math.round(weather.main.temp)}°C</p>
            <img className='nubes-img' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='xd'></img>
            <p className='clouds'>{weather.weather[0].main}</p>
        </ContainerRight>

        </div>
        ) : 'Not Found'}
    </div>
  )
}

export default card