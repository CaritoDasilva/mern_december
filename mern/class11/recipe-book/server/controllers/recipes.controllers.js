const Recipe = require("../models/recipe.model")

module.exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json({
            message: 'Se entregan de manera exitosa las recetas',
            recipes,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    };
}

module.exports.createRecipe = async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body);
        res.json({
            message: 'Se crea de manera exitosa la receta',
            newRecipe,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.updateRecipe = async (req, res) => {
    try {
        const { params, body } = req;
        const { id } = params;
        const recipeUpdated = await Recipe.findByIdAndUpdate(id, body, { new: true });
        res.json({
            message: 'Se actualiza de manera exitosa la receta',
            recipeUpdated,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.removeRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRecipe = await Recipe.deleteOne({ _id: id });
        res.json({
            message: 'Se actualiza de manera exitosa la receta',
            deletedRecipe,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}