const Booking = require("../models/Booking");

//Create booking
const createBooking = async (req, res) => {
    const { customerName, phoneNumber, service, appointmentDate, notes } = req.body;

    const booking = new Booking({
        customerName,
        phoneNumber,
        service,
        appointmentDate,
        notes,
        image,
        user: req.user._id
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
}

//Get All Booking

const getBookings = async (req, res) => {
    const bookings = await Booking.find().populate('user', 'name email');
    res.json(bookings);
};

module.exports = { createBooking, getBookings};

