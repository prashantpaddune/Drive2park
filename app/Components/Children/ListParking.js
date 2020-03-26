// Include React
var React = require("react");
var Check = require('react-checkbox-group');
var Checkbox = Check.Checkbox;
var CheckboxGroup = Check.CheckboxGroup;

// Creating the Form component


var ListProperty = React.createClass({

  getInitialState: function() {
  return {
    venueName: "",
    email: "",
    venueType: "",
    occupancy: "",
    amenities: [],
    address: "",
    city:"",
    state: "",
    postal: "",
    country: "",
    date: "",
    time: [],
    price:"",
    images:""
  }
 },


 componentDidMount() {
    // Add orange and remove watermelon after 5 seconds
    setTimeout(() => {
      this.setState({
        amenities: [],
        time:[]
      });
    }, 5000);
  },

    handleChange: function(event) {

    this.setState({ [event.target.name] : event.target.value });

  },
  


  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.state);
     this.setState({ venueName: "" });
     this.setState({ email: "" });
     this.setState({ venueType: "" });
     this.setState({ occupancy: "" });
     this.setState({ date: "" });
     this.setState({ time: "" });
     this.setState({ price: "" });
     this.setState({ images: "" });
     this.setState({ address: "" });
     this.setState({ city: "" });
     this.setState({ state: "" });
     this.setState({ postal: "" });
     this.setState({ country: "" });


  },

  amenitiesChanged : function(newAmenities) {
    this.setState({
      amenities: newAmenities
    });
  },

  timeChanged: function(newTime) {
    this.setState({
      time:newTime
    });
  },

  render: function() {
    return (
       
  <div className="bootstrap-iso">
   <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 col-sm-6 col-xs-12">
        <form className="form-horizontal" method="post" id="postPropertyForm" action="/insert" onSubmit ={this.handleSubmit}>
          <div className="form-group ">
            <label className="control-label col-sm-2" for="venueName">
              Venue Name
            </label>
            <div className="col-sm-10">
              <input type="text" value={this.state.venueName} onChange={this.handleChange} className="form-control" id="venueName" name="venueName" placeholder="venueName" />
            </div>
          </div>
          <div className="form-group ">
            <label className="control-label col-sm-2" for="email">
              Email
            </label>
            <div className="col-sm-10">
              <input type="text" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" name="email" placeholder="alex@smith.com" />
            </div>
          </div>

           <div className="form-group ">
            <label className="control-label col-sm-2" for="venueType">
              Venue Type
            </label>
            <div className="col-sm-10" id="venueType">
             <select name="venueType" value={this.state.venueType} onChange={this.handleChange}>
              <option>Event Space</option>
              <option>Meeting Space</option>
              <option>Others</option>
            </select>
            </div>
           </div>

           <div className="form-group ">
            <label className="control-label col-sm-2" for="occupancy">
              Occupancy
            </label>
            <div className="col-sm-10" id="occupancy">
             <select name="occupancy" value={this.state.occupancy} onChange={this.handleChange}>
            <option>1-50</option>
            <option>50-75</option>
            <option>75-100</option>
            <option>100-125</option>
            </select>            
           </div>
           </div>
           <div className="form-group ">
            <label className="control-label col-sm-2" for="amenities">
              Amenities

            </label>
            <div className="col-sm-10" id="amenities">
              <CheckboxGroup
                name="amenities"
                value={this.state.amenities}
                onChange={this.amenitiesChanged}>
         
                <label><Checkbox value="Wifi"/> Wifi</label>
                <label><Checkbox value="TV"/> TV</label>
                <label><Checkbox value="Speakers"/> Speakers</label>
                <label><Checkbox value="Pool"/> Pool</label>
              </CheckboxGroup>
           
           </div>
          </div>
          
          <div className="form-group ">
            <label className="control-label col-sm-2" for="address">
              Address Line
            </label>
            <div className="col-sm-10">
              <input type="text" value={this.state.address} onChange={this.handleChange} className="form-control" id="address" name="address" placeholder="Address Line " />
            </div>
          </div>
          
           <div className="form-group ">
            <label className="control-label col-sm-2" for="address">
              City
            </label>
            <div className="col-sm-10">
              <input type="text" value={this.state.city} onChange={this.handleChange} className="form-control" id="city" name="city" placeholder="City" />
            </div>
          </div>
          

          
          <div className="form-group ">
            <label className="control-label col-sm-2" for="address">
             State
            </label>
            <div className="col-sm-10">
              <input type="text" value={this.state.state} onChange={this.handleChange} className="form-control" id="state" name="state" placeholder="State" />
            </div>
          </div>
          

            <div className="form-group ">
            <label className="control-label col-sm-2" for="address">
              Postal Code
            </label>
            <div className="col-sm-10">
              <input type="text" value={this.state.postal} onChange={this.handleChange} className="form-control" id="postal" name="postal" placeholder="Postal Code" />
            </div>
          </div>
          
         
          <div className="form-group ">
            <label className="control-label col-sm-2" for="address">
              Country
            </label>
            <div className="col-sm-10">
              <input type="text" value={this.state.country} onChange={this.handleChange} className="form-control" id="address" name="country" placeholder="Country" />
            </div>
          </div>
          


          <div className="form-group" id="datetimepicker">
            <label className="input-group date col-sm-2" for="date">
              Date
            </label>
            <div className="col-sm-10">
              <input className="form-control" value={this.state.date} onChange={this.handleChange} id="date" name="date" placeholder="MM/DD/YYYY" type="date" />
             
            </div>
          </div>
           <div className="form-group ">
            <label className="control-label col-sm-2" for="time">
              Select Time
            </label>
            <div className="col-sm-10">
              <CheckboxGroup
                name="time"
                value={this.state.time}
                onChange={this.timeChanged}>
         
                <label><Checkbox value="9 AM - 12 PM"/> 9 AM - 12 PM</label>
                <label><Checkbox value="1 PM - 4 PM"/> 1 PM - 4 PM</label>
                <label><Checkbox value="5 PM - 8 PM"/> 5 PM - 8 PM</label>
              </CheckboxGroup>

           </div>
           </div>
           <div className="form-group ">
            <label className="control-label col-sm-2" for="price">
              Price
            </label>
            <div className="col-sm-10">
              <input value={this.state.price} onChange={this.handleChange} className="form-control" id="price" name="price" placeholder="price" type="text" />
            </div>
          </div>
          <div className="form-group">
         <label>Upload Images</label>
         <div className="input-group">
            <span className="input-group-btn">
                <span class="btn btn-default btn-file">
                    Browse… <input type="file" id="imgInp"/>
                </span>
            </span>
            <input type="text" className="form-control" readonly/>
        </div>
        <img id='img-upload'/>
        </div>
          <div className="form-group">
            <div className="col-sm-10 col-sm-offset-2">
              <button className="btn btn-primary " name="submit" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
        
    );
  }
});


module.exports = ListProperty;
