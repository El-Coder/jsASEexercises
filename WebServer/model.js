const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ASEschema = new Schema({
    name: {type: String, required: true, max: 100},
    message: {type: String, required: true, max: 500},
});

// Export the model
module.exports = mongoose.model('ASEdata', ASEschema);