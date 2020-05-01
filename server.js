var express= require('express');
var mongoose = require('mongoose');
 var app = express();
mongoose.connect('mongodb+srv://abdul:abdul12345@project1-ik8oe.mongodb.net/test?retryWrites=true&w=majority',{useUnifiedTopology:true,useNewUrlParser:true},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("sudah konek ke database")
    }
});
//  app.get('/',function(req,res,next){


//     res.json('selamat datang di halaman beranda')
//  });
 app.get('/:name',function(req,res,next){
 

    res.json(req.params.name)
 });
 app.listen(3000, function(err){
     if(err){
         console.log(err);
     }else{
         console.log("server berjalan pada port 3000")
     }
 });