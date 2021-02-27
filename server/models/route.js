const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    lat: {type: Number, required: true},
    lng: {type: Number, required: true},
    grade: {type: String, required: true},
    height: {type: Number, required:true},
    approach: {type: String, required: true},
    facilities: {type: String},
    info: {type: String}

})

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;