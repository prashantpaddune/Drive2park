
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RentalSearchInput = () => {
  const [location, setLocation] = useState('');
  const history = useHistory();

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  const handleSearch = () => {
    location ? 
      history.push(`/rentals/${location}/space`) :
      history.push('/')
  }

  return (
    <div className="form-inline my-2 my-lg-0 d-flex justify-content-center">
      <input 
        onKeyPress={handleKeyPress}
        onChange={e => setLocation(e.target.value)}
        value={location}
        className="form-control mr-sm-2 bwm-search" 
        type="search" 
        placeholder="Try 'Mumbai'"
        size="80"
        style={{borderRadius: 20}}/>
      <button
        onClick={handleSearch} 
        className="btn btn-bwm-main btn-outline-success my-2 my-sm-0"
        type="button"
      >Search</button>
    </div>
  )
}

export default RentalSearchInput;