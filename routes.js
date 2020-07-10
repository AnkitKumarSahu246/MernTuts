const express = require('express'); //importing 3rd party module
const app = express() //invoking express

data = {
    name:"ankit",
    status:"programmer"
}

module.exports = (app)=>{
    app.get('/',(req,res)=>{
        res.render('home',{datas:data});
    });
    
    app.get('/about',(req,res)=>{
        res.render('about');
    });
}
