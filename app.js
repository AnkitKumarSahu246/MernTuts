const express = require('express'); //importing 3rd party module
const app = express() //invoking express
const port = 5000;

//Serving static files
app.use(express.static('public'));

//Setting view engine
app.set('view engine','ejs');
//import routes
const routes = require('./routes')(app);
app.listen(port,()=>{
    console.log('Server is running on port '+port);
});
