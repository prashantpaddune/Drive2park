//Include React
var React = require("react");
var Link = require("react-router").Link;

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Creating the Form component
 
var SearchParking = React.createClass({
  getInitialState: function() {
   return {
     city: "",
     date: "",
     days: "",
     show_listings: false,
     listings:[]
   }
  },
  
  handleChange: function(event) {
     this.setState({ [event.target.name]: event.target.value });

  },
 
  handleSubmit: function(e) {
    e.preventDefault();
    
    helpers.getListings(this.state.city)
    .then(res => {
      let listings = [];
      listings = listings.concat(res.data);

      this.setState({
        show_listings: true,
        listings: listings
      });
    });
   },

   showJumbo: function() {
     return( 
       <div className="jumbotron">
         <div id="frontcontainer" className="container">
           <div className="container-logo">
              <img src="/assets/images/drive2park.png" style={{width:"200px", height:"200px",display:"block", margin:"auto"}}></img>
           </div>
           <h2 className="text-center"> Find and Book Parking in Seconds</h2>
           <form onSubmit={this.handleSubmit} className="form-inline d-flex justify-content-center" action="/action">
             <div className="form-group">
               <input type="text" value={this.state.city} onChange={this.handleChange} className="form-control test" id="city" placeholder="Search City" name="city" size="40"/>
             </div>
             <button type="submit" className="btn btn-primary btn-xl">Search</button>
           </form>
         </div>  
       </div> 
     );
   },

  // Here we describe this component's render method
  render: function() {
          const listings = this.state.listings.map((listing, i) => {
          const image = JSON.parse(listing.images)[0]
          const image_src = image ? image.url : ""
          return(
            <div key={i} className="row">
              <div className="col-md-8">
                <div  id="each_row">
                  <div className="col-md-3">
                    <img src={image_src} className="img-thumbnail " />
                  </div>
                  <div className="col-md-9">
                    <div>
                      <h3>{ listing.venueName }</h3>
                    </div>
                    <div>
                      <ul>
                        <li>Venue Type: { listing.venueType }</li>
                        <li>Occupancy: { listing.occupancy }</li>
                        <li>Amenities: { listing.amenities[0] } | { listing.amenities[1] } </li>
                      </ul>
                    </div>
                  </div>
                  <Link to={"/property/" + listing._id} className="btn btn-warning" data={listing._id} id="details">View</Link>
                </div>
              </div>
              <div className="col-md-4">
              </div>
            </div>
          );

      });


    //console.log("RRRRR",listings);
    return (
      <div id="maincontainer">

        { !this.state.show_listings ? this.showJumbo() : null }
      
        { this.state.show_listings ? listings : null }
      </div>
      
    );
  }
});

// Export the component back for use in other files
module.exports = SearchParking;
















 
  
