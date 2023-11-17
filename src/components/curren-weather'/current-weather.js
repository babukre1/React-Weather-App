import React from 'react';
import './current-weather.css';
const CurrentWeather = ({data}) => {
  return (
    <div className='weather'>
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className='weather-decription'>{data.weather[0].description}</p>
        </div>
        <img  className='weather-icon' alt="weather" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <div className="degree">{Math.floor(data.main.temp)}°C</div>
        <div className="details">
          <div className="parameter-row">
            <span className='parameter-label'>details</span>
          </div>
          <div className="parameter-row">
            <span className='parameter-label'>feels like</span>
            <span className='parameter-value'>{Math.floor(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className='parameter-label'>wind</span>
            <span className='parameter-value'>{Math.floor(data.wind.speed)} m/s</span>
          </div>
          <div className="parameter-row">
            <span className='parameter-label'>humidity</span>
            <span className='parameter-value'>{Math.floor(data.main.humidity)}%</span>
          </div>
          <div className="parameter-row">
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>{data.main.pressure}hPa</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CurrentWeather;
