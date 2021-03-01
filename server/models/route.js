const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    grade: {type: String, required: true},
    height: {type: String, required: true},
    approach: {type: String, required: true},
    facilities: {type: String, required: true},
    lat: {type: Number, required: true},
    long: {type: Number, required: true},
    address: {type: String},
    info: {type: String, required: true},
    user: {type: String, required: true}

})

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;