

import React from 'react';
import RentalCard from 'components/rental/RentalCard';
import { connect } from 'react-redux'
import { fetchRentals } from 'actions';
import RentalSearchInput from "../components/rental/RentalSearchInput";

class RentalHome extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
    const { rentals } = this.props;

    return (
        <div>
            <div className="container-logo">
                <img
                    src="/images/drive2park.png"
                    alt="..."
                    style={{width:"200px", height:"200px",display:"block", margin:"auto"}}>
                </img>
            </div>
            <h1 className="page-title text-center">Find and Book Parking in Seconds</h1>
            <RentalSearchInput/>
            <div className="card-list mt-4">
                <div className="row">
                    { this.renderRentals(rentals) }
                </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = ({rentals}) => {
  return {
    rentals: rentals.items
  }
}

export default connect(mapStateToProps)(RentalHome);