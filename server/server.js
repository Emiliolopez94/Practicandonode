require('./config/config');
require('./routes/usuario');
const express = require('express')
const app = express()
const mongoose = require('mongoose');

var bodyParser = require('body-parser')



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use( require('./routes/usuario'));
// parse application/json
app.use(bodyParser.json())
 
 


mongoose.connect(process.env.urlDB,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, (err)=>{
  if(err){
    throw err;
  }
  console.log("Base de datos online!");


});


app.listen(process.env.PORT, () => {
console.log("Desde el puerto :", process.env.PORT);
})