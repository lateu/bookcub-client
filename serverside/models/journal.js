const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const journalSchema = new mongoose.Schema({
    firstName:  { type: String, required: true},
    lastName:  { type: String, required: true},
    bookTitle: { type: String, required: true},    
    Date: { type: String, required: true},
    journalEntry:  { type: String, required: true},
   
});

//use the blueprint to create the model 
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Journal', journalSchema,'Journals');
//note capital J in the collection name