const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Debe ingresar un título de receta'],
        minlength: [3, 'No puede tener menos de 3 caracteres']
    },
    description: {
        type: String,
        required: [true, 'Debe ingresar una descripción de la receta'],
    },
    cook_time: {
        type: String,
        required: [true, 'Debe tener un tiempo de cocción']
    }, 
    difficulty_level: {
        type: String,
        default: 'easy'
    }

}, { timestamps: true });

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;