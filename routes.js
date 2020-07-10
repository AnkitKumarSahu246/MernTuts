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
        res.send("This is an about page.");
    });

    app.get('/profile/:id',(req,res)=>{
        res.send("you requested user no "+ req.params.id);
    });
}
