const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    customerName: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    service: {type: String, required: true},
    eyelashType: {type: mongoose.Schema.Types.ObjectId, ref: 'EyelashType'}, //Optional
    appointmentDate: {type: String, required: true},
    notes: {type: String, required: true},
    image: {type: String, required: true},
    paymentStatus: {type: String, default: "Pending"},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Booking', BookingSchema);