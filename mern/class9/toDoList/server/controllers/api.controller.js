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

module.exports.createToDo = (req, res) => {
    console.log("🚀 ~ file: api.controller.js:13 ~ req", req.body);
    toDoList.push(req.body)
    res.json(
        { 
            message: 'Se ha creado de manera exitosa la nueva tarea',
            list: toDoList 
        });
    
}

module.exports.changeStatusToDo = (req, res) => {
    const { body, params } = req;
    console.log("🚀 ~ file: api.controller.js:25 ~ body", body)
    toDoList[params.id].status = body.status
    res.json({
        message: "Se ha modificado la tarea exitosamente",
        list: toDoList
    })
}

module.exports.deleteTodo = (req, res) => {
    const { body, params } = req;
    toDoList.splice(params.id, 1);
    res.json({
        message: "Se ha borrado la tarea exitosamente",
        list: toDoList
    })
}

module.exports.showFullToDoList = (req, res) => {
    const { body, params } = req;
    console.log(body, params);
    res.json({
        list: toDoList
    })
}

module.exports.showTask = (req, res) => {
    const { body, params } = req;
    console.log("🚀 ~ file: api.controller.js:25 ~ body", body)
    res.json({
        list: toDoList[params.id]
    })
}