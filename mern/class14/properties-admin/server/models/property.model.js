const { Schema, model } = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const propertySchema = new Schema({
    title: {
        type: String,
        required: [true, 'Debe ingresar un nombre al estudiante'],
        minlength: [2, 'No puede tener menos de 3 caracteres']
    },
    description: {
        type: String,
        required: [true, 'Debe ingresar un rut al estudiante'],
    },
    location: {
        type: String,
        required: [true, 'Este campo es requerido'],
        unique: true
    },
    owner: {
        type: String,
        required: [true, 'Debe asignar un curso al estudiante'],
    },
    seller: {
        type: String,
        required: [true, 'Debe tener un tiempo de cocción'],
        min: [1, 'No puede tener un valor inferior a $1']
    },

}, { timestamps: true });

propertySchema.plugin(uniqueValidator, { message: '{PATH} ya existe, favor intentar con uno nuevo' });

const Property = model('Property', propertySchema);

module.exports = Property;