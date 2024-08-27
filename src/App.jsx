import './App.css'
import Search from './components/Search'
import Weather from './components/Weather'

function App() {

  const callApi = (cityName) => {
    console.log(cityName);

  }
  return (
    <div className='p-3'>
      <Search/>
      <Weather handleCityName={callApi}/>
    </div>
  )
}

export default App
