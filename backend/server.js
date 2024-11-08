const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//connnect DB
const {connectDB} = require('./configs/db');
connectDB();

// app.use('api/users', require('./routes/users'));
app.use('/api/services', require('./routes/services'));
app.use('/api/eyeLashTypes', require('./routes/eyeLashTypes'));    
app.use('/api/bookings', require('./routes/bookings'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});