import React from 'react'

const Weather = ({weather}) => {

    const unixToLocalTime = (unixTimestamp) => {
        // Convert Unix timestamp (in seconds) to milliseconds
        const date = new Date(unixTimestamp * 1000);
    
        // Get the local time as a string
        const localTime = date.toLocaleTimeString();
    
        return localTime;
    }

    return (
        <div className='card bg-light p-3 my-3 text-center'>
            <h2>Weather Info</h2>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" width={200} style={{margin:'0px auto'}}/>
            <p>{Math.round(weather.main.temp - 273.15)} &deg; C</p>
            <p>{weather.weather[0].main}</p>
            <p>{weather.main.pressure}hPa</p>
            <p>{weather.main.humidity}%</p>
            <p>Sunrise: {unixToLocalTime(weather.sys.sunrise)} | Sunset: {unixToLocalTime(weather.sys.sunset)}</p>
            </div>
    )
}

export default Weather