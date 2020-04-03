// Include React
var React = require("react");
var Check = require('react-checkbox-group');

var helpers = require("../utils/helpers");
var Checkbox = Check.Checkbox;
var CheckboxGroup = Check.CheckboxGroup;
var Images = require("./images");



// Creating the Form component
var ListProperty = React.createClass({

  getInitialState: function() {
  return {
    venueName: "",
    email: "",
    address: "",
    city:"",
    state: "",
    postal: "",
    country: "",
    date: "",
    days: "",
    time: [],
    price:"",
    uploadImages:[]
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
  //this method will be called on Submit . Then call helper method to save data
  handleSubmit: function(e) {
    console.log("inside handle submit");

    console.log(this.props.userId);

    //console.log("Updated Image Array -->"+JSON.stringify(this.state.uploadImages));

    e.preventDefault();


    var newProperty = {
        userId: this.props.userId,
        venueName: this.state.venueName,
        email: this.state.email,
        date: this.state.date,
        days: this.state.days,
        time: this.state.time,
        price: this.state.price,
        description:this.state.description,
        address:this.state.address,
        city:this.state.city,
        state:this.state.state,
        postal:this.state.postal,
        country:this.state.country,
        images:JSON.stringify(this.state.uploadImages)
    }

    helpers.saveProperty(newProperty)
    .then(function(data){
      console.log(data);
    }.bind(this));

     this.setState({ 
      venueName: "",
      email: "",
      date: "",
      days: "",
      time: "",
      price: "",
      images: "",
      address: "",
      city: "",
      state: "",
      postal: "",
      country: "",
      images: "",
      description:""
    });

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

  // This function allows childrens to update the parent.
  setImages: function(img) {
     this.state.uploadImages = img;
  },

 
            

  render: function() {
    return (
    
       <div className="container-fluid" id="form">
        <div className="form-dark" className="card card-image">
        <form className="form-horizontal" method="post" id="postPropertyForm" onSubmit ={this.handleSubmit}>
          <div className="form-group" id="formDiv">

             <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-bold"><strong>LIST YOUR SPACE</strong></h3>
            </div>
          <div className="form-group">

            <label className="control-label" for="venueName">
              Venue Name
            </label>
           
              <input type="text" value={this.state.venueName} onChange={this.handleChange} className="form-control" id="venueName" name="venueName" placeholder="venueName" />
           
          </div>
          <div className="form-group ">
            <label className="control-label" for="email">
              Email
            </label>
           
              <input type="text" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" name="email" placeholder="alex@smith.com" />
            
          </div>
          
            <div className="form-group ">
            <label className="control-label" for="description">
              About the Parking Lot 
            </label>
              <textarea className="form-control" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
            </div>
            <div className="form-group ">
            <label className="control-label" for="address">
              Address
            </label>
             <input type="text" value={this.state.address} onChange={this.handleChange} className="form-control" id="address" name="address" placeholder="Address Line " />
            </div>
           <div className="row">
            <div className="col-xs-6">
          
            <label className="control-label" for="city">
              City
            </label>
             <input type="text" value={this.state.city} onChange={this.handleChange} className="form-control" id="city" name="city" />
            </div>

            <div className="col-xs-6">
            <label className="control-label" for="state">
              State
            </label>
              <input type="text" value={this.state.state} onChange={this.handleChange} className="form-control" id="state" name="state" placeholder="State" />
            </div>
            </div>
            <div className="row">
             <div className="col-xs-6">
             <label className="control-label" for="postal">
              Postal
             </label>
              <input type="text" value={this.state.postal} onChange={this.handleChange} className="form-control" id="postal" name="postal" placeholder="Postal Code" />
            </div>

            <div className="col-xs-6">
             <label className="control-label" for="country">
              Country
             </label>
              <input type="text" value={this.state.country} onChange={this.handleChange} className="form-control" id="address" name="country" placeholder="Country" />
            </div>
            </div>
            <div className = "row">
            <div className="col-xs-6">
             <label className="control-label" for="date">
              Date 
             </label>
              <input className="form-control" value={this.state.date} onChange={this.handleChange} id="date" name="date" placeholder="MM/DD/YYYY" type="date" />
            </div>

            <div className="col-xs-6">
             <label className="control-label" for="days">
              Days 
             </label>
              <input className="form-control" value={this.state.days} onChange={this.handleChange} id="days" name="days" type="text" />
            </div>
            </div>

            <div className = "row">
            <div className="col-xs-6">
             <label className="control-label" for="email">
              Price
             </label>
              <input value={this.state.price} onChange={this.handleChange} className="form-control" id="price" name="price" placeholder="price" type="text" />
            </div>
            </div>
            
         
           <div className="form-group ">
            <label className="control-label col-sm-2" for="time">
             Time
            </label>
          
              <CheckboxGroup
                name="time"
                value={this.state.time}
                onChange={this.timeChanged} id="ckBox">
         
                <label><Checkbox value="9 AM - 12 PM"/> 9 AM - 12 PM</label>
                <label><Checkbox value="1 PM - 4 PM"/> 1 PM - 4 PM</label>
                <label><Checkbox value="5 PM - 8 PM"/> 5 PM - 8 PM</label>
              </CheckboxGroup>

           </div>
         
           <div className="form-group">

            <Images setImages={this.setImages} />
           </div>

          <div className="form-group">
            <div className="col-lg-10 col-lg-offset-4">
              <button className="btn btn-primary btn-lg" name="submit" type="submit">
                Submit
              </button>
            </div>
          </div>
            

         </div>
        </form>
        </div>
       </div> 

    );
  }
});

module.exports = ListProperty;
