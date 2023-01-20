const Menu = require("../models/menu.model");

module.exports.getAllMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json({
            message: 'Se entregan de manera exitosa las recetas',
            menus,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    };
}

module.exports.createMenu = async (req, res) => {
    try {
        console.log("🚀 ~ file: menu.controllers.js:22 ~ module.exports.createMenu= ~ req.body", req.body)
        const newMenu = await Menu.create(req.body.menu);
        res.json({
            message: 'Se crea de manera exitosa la receta',
            newMenu,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.updateMenu = async (req, res) => {
    try {
        const { params, body } = req;
        const { id } = params;
        const updatedMenu = await Menu.findByIdAndUpdate(id, body.menu, { new: true });
        res.json({
            message: 'Se actualiza de manera exitosa la receta',
            updatedMenu,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.removeMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMenu = await Menu.deleteOne({ _id: id });
        res.json({
            message: 'Se actualiza de manera exitosa la receta',
            deletedMenu,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.getOneMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const menu = await Menu.findById(id);
        res.json({
            message: 'Se trae de manera exitosa el menu',
            menu,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}