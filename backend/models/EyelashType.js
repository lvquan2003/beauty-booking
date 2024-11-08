const mongoose = require("mongoose");

const EyelashTypeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    service: {type: mongoose.Schema.Types.ObjectId, ref: 'Service'}
})

module.exports = mongoose.model('EyelashType', EyelashTypeSchema);
