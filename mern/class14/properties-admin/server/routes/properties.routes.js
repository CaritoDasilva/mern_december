const { getAllProperties, getOneProperty, createProperty, updateProperty, removeProperty } = require("../controllers/properties.controllers");

module.exports = (app) => {
    app.get('/api/property', getAllProperties)
    app.get('/api/property/:id', getOneProperty);
    app.post('/api/property', createProperty);
    app.put('/api/property/:id', updateProperty);
    app.delete('/api/property/:id', removeProperty);
};