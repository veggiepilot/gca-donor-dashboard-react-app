const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donorSchema = new Schema({
    name: String, 
    address1: String,
    address2: String,
    city: String, 
    state: String, 
    zip: Number,
    email: String,
    phone: Number,
    amountDonated: Number
});

module.exports = mongoose.model('Donor', donorSchema);