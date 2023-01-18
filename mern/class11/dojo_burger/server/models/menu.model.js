const { Schema, model } = require('mongoose');

const menuSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Debe ingresar un título de receta'],
        minlength: [3, 'No puede tener menos de 3 caracteres']
    },
    description: {
        type: String,
        required: [true, 'Debe ingresar una descripción de la receta'],
    },
    calories: {
        type: Number
    },
    price: {
        type: Number,
        required: [true, 'Debe tener un tiempo de cocción'],
        min: [1, 'No puede tener un valor inferior a $1']
    }

}, { timestamps: true });

const Menu = model('Menu', menuSchema);

module.exports = Menu;