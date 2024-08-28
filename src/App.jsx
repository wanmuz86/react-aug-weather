import './App.css'
import Search from './components/Search'
import Weather from './components/Weather'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = async (cityName) => {
    console.log(cityName);
    // Call the API here
    // Show in console
    // async - await (second way to process Promises/ Asynchronous data)
    // We will embed in try catch

    if (cityName.length < 3){
      setError('Please fill in more than 3 characters')
      return;
    }

    try {
      setLoading(true)
      setError(false)
      setWeather(null)

      // If there is keywaord await (you are processing promise/ asyncronous data), 
      // YOu need to declare this function as async function
      // You find the function declartion and add 'async' keyword
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9fd7a449d055dba26a982a3220f32aa2`)
      const data = response.data

      setWeather(data)

    } catch (error) {
      console.log(error)
      setError('An error occured ')
    } finally {
      setLoading(false)

    }

  }
  return (
    <div className='p-3'>
      <Search handleCityName={callApi} />
      {weather && <Weather weather={weather} />}
      {error && <p className='text-danger'>{error}</p>}
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default App
