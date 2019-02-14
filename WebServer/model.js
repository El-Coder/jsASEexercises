const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Define the model
let ASEschema = new Schema({
    name: {type: String, required: true, unique : true, max: 100},
    message: {type: String, required: true, max: 500},
    oldMessage: {type: String, required: false, max: 500, default: ''}
});
//Override the toJSON method to remove keys we don't want returned
ASEschema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj._id;
    delete obj.__v;
    return obj;
   }
// Export the model
module.exports = mongoose.model('jsPost', ASEschema);