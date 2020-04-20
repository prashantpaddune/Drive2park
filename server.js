require('babel-register');
require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const fileUpload = require('express-fileupload');
const expressSession = require('express-session')({
  secret: 'random strings here',
  resave: false,
  saveUninitialized: false,
});
const webpack = require('webpack');


const flash = require('connect-flash');
const session = require("express-session")

const User = require('./models/user');
const PostAdd = require('./models/postAdd');

// Routes
const authentication = require('./routes/api/authentication');

const app = express();

app.use(fileUpload());

app.post("/upload", function(res,req) {
  if(!req.files) {
    res.send("No file uploaded");
  }
  else {
    const file = req.files.file;
    const extension = path.extname(file.name);
    if(extension !=="png" && extension !== ".gif" && extension !==".jpg"){
      res.send("only images are allowed");
    }
    else {
      file.mv(__dirname+"/uploads/" + file.name, function(err) {
        if(err) {
          res.status(500).send(err);
        }
        else {
          res.send("File Uploaded");
        }
      });
    }
  }
})

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'any random string can go here',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/authentication', authentication);

// Configure Passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post('/insert', function(req, res, next){
  var item =({
    venueName : req.body.venueName,
    email: req.body.email,
    date: req.body.date,
    time: req.body.time,
    price: req.body.price
}).save(function(err, res){
   if(err){
    res.json(err);
   }
   else{
   res.send("inserted");
   }

})

 
});
//catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
})

const PORT = process.env.PORT || 3001;

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://mongo/drive2park";
// Connect mongoose to our database
mongoose.connect(db, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  autoIndex: true, 
  useCreateIndex: true, 
},
    function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

app.listen(PORT, function(){
  console.log(("Express server listening on port " + PORT));
});
