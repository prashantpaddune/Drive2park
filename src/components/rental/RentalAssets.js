
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RentalAssets = () => 
  <div className="rental-assets">
    <h3 className="title">Assets</h3>
    <div className="row">
      <div className="col-md-6">
        <span>
          <FontAwesomeIcon icon="motorcycle" /> Bike
        </span>
      </div>
      <div className="col-md-6">
        <span>
          <FontAwesomeIcon icon="car" /> Car
        </span>
      </div>
    </div>
  </div>


export default RentalAssets;