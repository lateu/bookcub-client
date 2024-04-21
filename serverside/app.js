    const express = require('express');
    const app = express();
    const bodyParser  = require('body-parser');

    const mongoose = require('mongoose');
    //specify where to find the schema
    const Bookclub = require('./models/bookclub');
    const Message = require('./models/message');
    //connect and display the status 
    /*mongoose.connect('mongodb://localhost:27017/IT6203_project')
        .then(() => { console.log("connected"); })
        .catch(() => { console.log("error connecting"); });*/
    mongoose.connect('mongodb+srv://demo-user:4lrP9KRyQPwc4bg8@cluster0.1ne3jgw.mongodb.net/IT6203_project')
        .then(() => { console.log("connected"); })
        .catch(() => { console.log("error connecting"); });

    //specify which domains can make requests and which methods are allowed
    app.use((req, res, next) => {
        console.log('This line is always called');
        res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS,DELETE'); //allowable methods
        res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });

    //parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
    //parse application/json
    app.use(bodyParser.json())


    /*#################################CLUB COMPONENT METHODS##############################################*/
    app.get('/bookclubs', (req, res, next) => {
        //call mongoose method find club list
        Bookclub.find() 
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))
    .catch(err => {
    console.log('Error: ${err}');
    res.status(500).json(err);
    });

    });


    //find a club based on the id
    app.get('/bookclub/:id', (req, res, next) => {
        Bookclub.findOne({_id: req.params.id}) 
            //if data is returned, send data as a response 
            .then(data => {
                res.status(200).json(data)
                console.log(data);
            })
            //if error, send internal server error
            .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
    });


    app.post('/bookclub', (req, res, next) => {    
        const today = new Date()
        const club = new Bookclub({
            description: req.body.description,
            bookname: req.body.bookname,
            imageurl:req.body.imageurl,
            author:"TBD",
            isbn:req.body.isbn,
            keyword:req.body.key_word,
            createdate: today
        });
        //send the document to the database 
        club.save()
            //in case of success
            .then(() => { console.log('success');})
            //if error
            .catch(err => {console.log('Error:' + err);});
    });

     //:id is a dynamic parameter that will be extracted from the URL
     app.delete("/bookclub/:id", (req, res, next) => {
        Bookclub.deleteOne({ _id: req.params.id }).then(result => {
            console.log(result);
            res.status(200).json("Deleted!");
        });
    });

     //serve incoming put requests to /bookclub 
     app.put('/bookclub/:id', (req, res, next) => { 
        console.log("id: " + req.params.id) 
        // check that the parameter id is valid 
        if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
            //find a document and set new first and last names 
            Bookclub.findOneAndUpdate( 
                {_id: req.params.id}, 
                {$set:{ 
                    description : req.body.description, 
                    keyword : req.body.key_word 
                }}, 
                {new:true} 
            ) 
            .then((club) => { 
                if (club) { //what was updated 
                    console.log(club); 
                } else { 
                    console.log("no data exist for this id"); 
                } 
            }) 
            .catch((err) => { 
                console.log(err); 
            }); 
        } else { 
            console.log("please provide correct id"); 
        } 
    });

       /*#################################END CLUB COMPONENT METHODS##############################################*/

       /*#################################MESSAGE COMPONENT METHODS##############################################*/
       

       app.post('/messages', (req, res, next) => {

        const message = new Message({
    
            firstName: req.body.firstName,
    
            lastName: req.body.lastName,
                        
            yourMessage: req.body.yourMessage
        });
    
        message.save()
    
            .catch(err => {console.log('Error:' + err);});
    
    });
     
     
     
     
    app.get('/messages', (req, res, next) => {
    
        Message.find() 
    
        .then(data => res.status(200).json(data))
    
        .catch(err => {
    
        console.log('Error: ${err}');
    
        res.status(500).json(err);
    
        });
     
    });
     
     
    
app.delete("/messages/:id", (req, res, next) => {

    Message.deleteOne({ _id: req.params.id }).then(result => {

        console.log(result);

        res.status(200).json("Deleted!");

    });
});
    
    



    //to use this middleware in other parts of the application
    module.exports=app;