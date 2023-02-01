const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();


app.use(cookieParser());

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({extended: true}));

require('./server/config/mongoose.config');



const studentsRoute = require('./server/routes/students.routes.js');

studentsRoute(app);

console.log("🚀 ~ file: server.js ~ line 9 ~ process.env", process.env.SECRET_KEY)
app.listen(port, () => console.log("Im in production my friend!"))
