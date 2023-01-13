const Task = require("../models/task.model");

const toDoList = [
    {
        title: 'Ir al supermercado',
        status: 'Pendiente'
    },
    {
        title: 'Subir ejercicios a la plataforma',
        status: 'Pendiente'
    }
]

module.exports.sayHi = (req, res) => {
    res.json({ message: "Hello from server ninjas!" });
}

module.exports.createTask = async (req, res) => {
    try {
        console.log("🚀 ~ file: api.controller.js:13 ~ req", req.body);
    // toDoList.push(req.body)
    const { body } = req;
    const newTask = await Task.create(body);
    res.json(
        { 
            message: 'Se ha creado de manera exitosa la nueva tarea',
            newTask 
        });

    } catch(err) {
        console.log("🚀 ~ file: api.controller.js:30 ~ module.exports.createTask= ~ err", err)
        res.status(500).json({
            error: err,
            messge: 'Ups, no hemos podido crear la tarea'
        })
    }
    
    
}

module.exports.changeStatusToDo = async (req, res) => {
    try {
        const { body, params } = req;
        const updateStatusTask = await Task.findOneAndUpdate(
            {_id: params.id},
            body,
            {new: true}
        )
        console.log("🚀 ~ file: api.controller.js:25 ~ body", body)
        res.json({
            message: "Se ha modificado la tarea exitosamente",
            list: updateStatusTask
        })

    } catch(err) {
        console.log("🚀 ~ file: api.controller.js:30 ~ module.exports.createTask= ~ err", err)
        res.status(500).json({
            error: err,
            messge: 'Ups, no hemos podido actualizar la tarea'
        })
    }
    
}

module.exports.deleteTodo = (req, res) => {
    const { body, params } = req;
    toDoList.splice(params.id, 1);
    res.json({
        message: "Se ha borrado la tarea exitosamente",
        list: toDoList
    })
}

module.exports.showFullToDoList = async (req, res) => {
    try {
        const fullList = await Task.find();
        res.json({
            list: fullList
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            messge: 'Ups, no hemos traer los elementas de la lista'
        })
    }
    
}

module.exports.showTask = (req, res) => {
    const { body, params } = req;
    console.log("🚀 ~ file: api.controller.js:25 ~ body", body)
    res.json({
        list: toDoList[params.id]
    })
}