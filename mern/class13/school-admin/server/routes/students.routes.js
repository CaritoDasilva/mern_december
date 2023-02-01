const { authenticate } = require("../config/jwt.config");
const { getAllStudents, updateStudent, createStudent, removeStudent, getOneStudent, login } = require("../controllers/students.controllers");

module.exports = (app) => {
    app.get('/api/student', authenticate, getAllStudents)
    app.get('/api/student/:id', getOneStudent);
    app.post('/api/student', createStudent);
    app.put('/api/student/:id', updateStudent);
    app.delete('/api/student/:id', removeStudent);
    app.post('/api/student/login', login);
};