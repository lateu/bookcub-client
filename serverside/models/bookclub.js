const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const bookclubSchema = new mongoose.Schema({
    description:  { type: String, required: true},
    bookname:  { type: String, required: true},
    author:  { type: String, required: true},
    imageurl: { type: String, required: true},
    isbn: { type: String, required: true},
    keyword: { type: String, required: true},
    createdate: { type: Date, required: true}
    
});

//use the blueprint to create the model 
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Bookclub', bookclubSchema,'Bookclubs');
//note capital S in the collection name
                    