var express= require('express');
var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
 var app = express();

 const MongoClient = require('mongodb').MongoClient;
 const uri = "mongodb+srv://abdul:abdul12345@project1-ik8oe.mongodb.net/test?retryWrites=true&w=majority";
 const client = new MongoClient(uri, { 
     useNewUrlParser: true,
    useUnifiedTopology: true
    });
 client.connect(err => {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
   console.log('sudah connect ke databasemu bdull...')
 });
 // membuat middleware
//  app.use(bodyParser.json);// menerima bodeparse dalam format json
//  app.use(bodyParser.urlencoded({ extended : true})); //menerima bodyparse dalam format utc


app.get('/',function(req,res,next){

    res.json('selamat datang di halaman beranda')
 });
//  app.get('/:name',function(req,res,next){
 
    var UserSchema = new mongoose.Schema({


        name: String,
        age : Number
    });
    // //membuat model
     var User =mongoose.model('User', UserSchema );
    
    //menambahkan  new User
    app.get('/create-user',function(req,res,next){
        var user = new User();
        user.name = "abdul";
        user.age = 17;
        res.json(user);
        user.save();

        // user.save(function(err){

        //     if (err) next(err);
        //     res.json(user);
        // });
    
    });



    //membuat method post nya
    // app.post('/create-user', function(req,res,next){

    //     var user= new User();
    //     user.name =req.body.name;
    //     user.age =req.body.age;
    //     user.save(function(err){
    //         if(err) console.log(err);
    //         res.json(user);
    //     });
    // });

    // // postman=eksternal post yg membantu testing IP 

    // app.post('/create-user', function(req, res, next){

 
    //     var user=new User(); // menginstansikan user baru


    // });
    
//     res.json(req.params.name)
//  });
 app.listen(3000, function(err){
     if(err){
         console.log(err);
     }else{
         console.log("server berjalan pada port 3000")
     }
 });