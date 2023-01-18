const { getAllRecipes, createRecipe, updateRecipe, removeRecipe } = require("../controllers/recipes.controllers");

module.exports = (app) => {
    app.get('/api/recipes', getAllRecipes)
    app.post('/api/recipes', createRecipe);
    app.put('/api/recipes/:id', updateRecipe);
    app.delete('/api/recipes/:id', removeRecipe);
    // app.get('/api/recipe/:id', );
};