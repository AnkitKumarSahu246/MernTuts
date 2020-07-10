const express = require('express'); //importing 3rd party module
const bodyParser = require('body-parser');
const app = express() //invoking express
const port = 5000;

//Serving static files
app.use(express.static('public'));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

//parse application/json
app.use(bodyParser.json());

//Setting view engine
app.set('view engine','ejs');
//import routes
const routes = require('./routes')(app);
app.listen(port,()=>{
    console.log('Server is running on port '+port);
});
