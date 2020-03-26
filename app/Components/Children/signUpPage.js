// Include React
var React = require("react");

// Creating the Form component
 
var SignUp = React.createClass({

  getInitialState: function() {
  return {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    rpassword: ""

  }
 },
    handleChange: function(event) {

    this.setState({ [event.target.name]: event.target.value });

  },
  

  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.state);
     this.setState({ firstName: "" });
     this.setState({ lastName: "" });
     this.setState({ username: "" });
     this.setState({ email: "" });

  },

  // Here we describe this component's render method
  render: function() {
    return (
     
      
            <div className="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel">
            
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header"> <h3> Register with Drive2park! </h3> </div>
                    <div className="modal-body">
                    
                      <form className="form" id="registrationForm" onSubmit ={this.handleSubmit}>
                          <div className="form-group">
                              <input value= {this.state.firstName} onChange={this.handleChange} id="rfirstName" name = "firstName" className="form-control" type="text" placeholder="FirstName" />
                          </div>
                          <div className="form-group">
                              <input value= {this.state.lastName} onChange={this.handleChange} id="rLastName" name = "lastName" className="form-control" type="text" placeholder="LastName" />
                          </div>
                          <div className="form-group">
                              <input value= {this.state.username} onChange={this.handleChange} id="ruser" name = "username" className="form-control" type="text" placeholder="Username" />
                          </div>
                          <div className="form-group">
                              <input value= {this.state.email} onChange={this.handleChange} id="remail" name = "email" className="form-control" type="text" placeholder="Email" />
                          </div>
                          <div className="form-group">
                              <input value= {this.state.password} onChange={this.handleChange} id="rpassword" name = "password" className="form-control" type="password" placeholder="Password" />
                          </div>
                          <div className="form-group">
                              <input value= {this.state.rpassword} onChange={this.handleChange} id="rptpassword" name = "rpassword" className="form-control" type="password"
                                      placeholder="Repeat Password" />
                          </div>
                          <input className="btn btn-primary" type="submit" name="register" value="Register" />
                      </form>
                    </div>
                    <div className="modal-footer">
                        <h5 style={{"display": "inline-block"}}> Already have an account? </h5> <a href="#"> Sign In </a>
                    </div>
                </div>
            </div>
          </div>
        
    );
  }
});

// Export the component back for use in other files
module.exports = SignUp;
