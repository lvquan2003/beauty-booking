const EyelashType = require('../models/EyelashType');

// Create a new eyelash type
const createEyelashType = async (req, res) => {
  const { name, description, price, service } = req.body;
  const eyelashType = new EyelashType({ name, description, price, service });
  const createdEyelashType = await eyelashType.save();
  res.status(201).json(createdEyelashType);
};

// Get all eyelash types
const getEyelashTypes = async (req, res) => {
  const eyelashTypes = await EyelashType.find().populate('service');
  res.json(eyelashTypes);
};

module.exports = { createEyelashType, getEyelashTypes };