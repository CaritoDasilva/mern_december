const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const apiRoutes = require('./server/routes/api.routes');

apiRoutes(app);

app.listen(port, () => console.log("Im in production my friend!"))