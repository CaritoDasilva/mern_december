const { sayHi, createToDo, changeStatusToDo, deleteTodo } = require("../controllers/api.controller");

module.exports = (app) => {
    app.get('/api', sayHi);
    app.post('/api/toDo', createToDo);
    app.patch('/api/toDo/:id', changeStatusToDo);
    app.delete('/api/toDo/:id', deleteTodo);
};