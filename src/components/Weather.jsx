import React from 'react'

const Weather = ({weather}) => {
    return (
        <div className='card bg-light p-3 my-3 text-center'>
            <h2>Weather Info</h2>
            <img src="" alt="" />
            <p>{weather.main.temp - 273.15}</p>
            <p>{weather.weather[0].main}</p>
            <p>{weather.main.pressure} </p>
            <p>{weather.main.humidity}</p>
            <p>{weather.sys.sunrise} | {weather.sys.sunset}</p>
            </div>
    )
}

export default Weather