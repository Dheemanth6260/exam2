
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
 
var documentSchema = new Schema({
 
  
    char: { type: String, required: true }, 
    number: { type: Number, min: 16, max: 60}, 
   
 
    
      
    
});
 
module.exports = 
 Mongoose.model('documents', documentSchema);
 
 
