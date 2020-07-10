// const express = require('express'); //importing 3rd party module
// const app = express() //invoking express

var data  = ['C','C++','Python','JavaScript'];    

module.exports = (app)=>{
    app.get('/',(req,res)=>{
        res.render('home',{datas:data});
    });
    
    app.get('/about',(req,res)=>{
        res.render('about');
    });

    app.post('/sent',(req,res)=>{
        console.log(req.body.langs);
        data.push(req.body.langs);
        res.send(data);
    });

    app.delete('/remove/:id',(req,res)=>{

        data = data.map(langs=>{
            if(langs != req.params.id){
                return langs;
            }
        });
        console.log(req.params.id);
        res.send(data);
    });
}
