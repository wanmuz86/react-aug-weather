import React, { useState } from 'react'

const Search = ({handleCityName}) => {

    const [cityName, setCityName] = useState('')

    const handleNameChanged = (e) => setCityName(e.target.value);
    const handleClick = () => handleCityName(cityName);

return (
    <div className='row'>
        {/* 8 here means 8/12  == 2/3 */}
        <div className='col-8'>
            <input type="text" className='form-control form' placeholder='Enter city name' value={cityName}
                onChange={handleNameChanged} />
        </div>
        {/* 8 here means 4/12  == 1/3 */}
        <div className='col-4'>
            <button className='btn btn-primary' style={{ width: '100%' }} onClick={handleClick}>Search</button>

        </div>

    </div>
)
}

export default Search