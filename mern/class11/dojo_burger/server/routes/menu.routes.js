const { getAllMenus, createMenu, updateMenu, removeMenu, getOneMenu } = require("../controllers/menu.controllers");

module.exports = (app) => {
    app.get('/api/menu', getAllMenus)
    app.get('/api/menu/:id', getOneMenu);
    app.post('/api/menu', createMenu);
    app.put('/api/menu/:id', updateMenu);
    app.delete('/api/menu/:id', removeMenu);
};