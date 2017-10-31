
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
 
var documentSchema = new Schema({
 
  
    char: { type: String, required: true }, 
    number: { type: Number,16,60}, 
   
 
    
      
    
});
 
module.exports = 
 Mongoose.model('documents', documentSchema);
 
 
