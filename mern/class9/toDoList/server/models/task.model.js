const { Schema, model } = require('mongoose');

const tagSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Debe ingresar un título de tarea'],
        minlength: [3, 'No puede tener menos de 3 caracteres']
    },
    description: {
        type: String,
        required: [true, 'Debe ingresar una descripción de tarea'],
    },
    status: {
        type: String,
        default: 'Pendiente'
    }

}, { timestamps: true });

const Task = model('Task', tagSchema);

module.exports = Task;