
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RentalAssets = () => 
  <div className="rental-assets">
    <div className="row">
      <div className="col-md-6">
        <span>
          <FontAwesomeIcon icon="motorcycle" /> Bike Parking
        </span>
      </div>
      <div className="col-md-6">
        <span>
          <FontAwesomeIcon icon="car" /> Car Parking
        </span>
      </div>
    </div>
  </div>


export default RentalAssets;