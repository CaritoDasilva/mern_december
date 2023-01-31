const Property = require("../models/property.model");

module.exports.getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json({
            message: 'Se entregan de manera exitosa todos los estudiantes',
            properties,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    };
}

module.exports.createProperty = async (req, res) => {
    try {
        const newProperty = await Property.create(req.body.property);
        res.json({
            message: 'Se crea de manera exitosa el estudiante nuevo',
            newProperty,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.updateProperty = async (req, res) => {
    try {
        const { params, body } = req;
        const { id } = params;
        const updatedProperty = await Property.findByIdAndUpdate(id, body.property, { new: true });
        res.json({
            message: 'Se actualiza de manera exitosa la información de la propiedad',
            updatedProperty,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.removeProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProperty = await Property.deleteOne({ _id: id });
        res.json({
            message: 'Se actualiza de manera exitosa la información de la propiedad',
            deletedProperty,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.getOneProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const property = await Property.findById(id);
        res.json({
            message: 'Se trae de manera exitosa la información de la propiedad',
            property,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}