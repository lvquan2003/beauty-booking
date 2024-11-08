const Service = require("../models/Service");

// Create a new service
const createService =  async (req, res) => {
    const {name, description, category} = req.body;
    const service = new Service({name, description, category});
    const createdService = await service.save();
    res.status(201).json(createdService);
};

//Get All Service
const getServices = async (req, res) => {
    const services = await Service.find();
    res.json(services);
};


//Delete a Service by Id
const deleteService = async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if(!service)
        {
            return res.status(404).json({message: 'Service not found'})
        }
        res.json({message: 'Service removed'})
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {createService, getServices, deleteService};
