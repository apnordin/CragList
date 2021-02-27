const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String},
    grade: {type: String},
    height: {type: String},
    approach: {type: String},
    facilities: {type: String},
    lat: {type: Number},
    long: {type: Number},
    address: {type: String},
    info: {type: String}

})

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;