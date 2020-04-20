// Include React
var React = require("react");
var Dropzone = require("react-dropzone");
var helpers = require("../utils/helpers");
var sha1 = require('sha1');
var superagent = require('superagent');



// Creating the Form component
var Images = React.createClass({
 

 getInitialState: function() {
  return ({
    images: []
    
  })
 },

 uploadFile(files){
  console.log('uploadFile: ')
  const image = files[0]

  const cloudName= 'dyd0ckv4b';
  const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload';
  const timestamp = Date.now()/1000
  const uploadPreset = 'kdjlvq5o'
  const paramsStr = 'timestamp='+ timestamp + '&upload_preset='+ uploadPreset+'UhMVnfpYNyRpNg7CtVH3j-zIHOw'

  const signature = sha1(paramsStr)

  const params ={
    'api_key': '748592412323862',
    'timestamp': timestamp,
    'upload_preset': uploadPreset,
    'signature': signature

  },

  uploadRequest = superagent.post(url)
  uploadRequest.attach('file', image)

  Object.keys(params).forEach((key) => {
    uploadRequest.field(key, params[key])
  })
 uploadRequest.end((err, resp) =>{
  if(err){
    alert(err)
    return
  }
  console.log("UPLOAD COMPLETE:" + JSON.stringify(resp.body))
  const uploaded = {url:resp.body.url}
  console.log( 'inside imgae.js --',resp.body['url'])
  const updatedImages = Object.assign([], this.state.images)
  updatedImages.push(uploaded)
  this.setState({
    images: updatedImages
  })
 })
 },

  removeImage(event){
  event.preventDefault();
  console.log('removeImage:  '+ event.target.id)
   const updatedImages = Object.assign([], this.state.images)
    updatedImages.splice(event.target.id, 1)
    this.setState({
    images: updatedImages
  })
    console.log(images);
 },
  
  componentDidUpdate: function() {
        this.props.setImages(this.state.images);
  },
  render: function() {
    const list = this.state.images.map((image, i) =>{
      console.log('image object -->',image);
      return (
        <li key={i}>
         <img style={{width: 100, display: 'inline'}} src={image.url}/>
         <br /><a id={i} onClick={this.removeImage} href="#">Remove</a>
        </li> 


        )
    })
    return (
            <div>
       <b> Upload Images</b>
        <Dropzone onDrop={this.uploadFile}/>
        <ol>
         { list }
        </ol>
      </div>
     

    );
  }
});

// Export the component back for use in other files
module.exports = Images;
