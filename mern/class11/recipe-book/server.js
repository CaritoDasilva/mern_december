const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

require('./server/config/mongoose.config');

const recipesRoutes = require('./server/routes/recipes.routes.js');

recipesRoutes(app);

app.listen(port, () => console.log("Im in production my friend!"))
