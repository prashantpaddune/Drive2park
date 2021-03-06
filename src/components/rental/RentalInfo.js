
import React from 'react';
import RentalAssets from './RentalAssets';
import { capitalize } from 'helpers/functions';

const RentalInfo = ({rental}) =>
  <div className="rental">
    <h2 className={`rental-type type-${rental.category}`}>
      {rental.category}
    </h2>
    { rental.owner &&
      <div className="rental-owner">
        <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="owner"/>
        <span>{rental.owner.username}</span>
      </div>
    }
    <h1 className="rental-title">{rental.title}</h1>
    <h2 className="rental-city">{capitalize(rental.city)}</h2>
    <p className="rental-description">
      {rental.description}
    </p>
    <hr/>
    <RentalAssets />
  </div>

  export default RentalInfo;