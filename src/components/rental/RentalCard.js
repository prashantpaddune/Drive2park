

import React from 'react';
import { Link } from 'react-router-dom';

const RentalCard = ({rental, renderMenu}) => {
    return (
        <>
          <Link className="rental-link" to={`/rentals/${rental._id}`}>
            <div className="card bwm-card mt-4">
              <img
                  className="card-img-top"
                  src={rental.image ? rental.image.url : "/images/img-no-thumbnail.png"}
                  alt={rental.title}/>
              <div className="card-body">
                <h6 className={`card-subtitle mb-0 type-${rental.category}`}>
                  {rental.category} &#183; {rental.city}
                </h6>
                <h5 className="card-title big-font">{rental.title}</h5>
                <p className="card-text">₹{rental.dailyPrice} / Day &#183; Free Cancelation</p>
              </div>
            </div>
          </Link>
          {renderMenu && renderMenu()}
        </>
    )
}

export default RentalCard;
