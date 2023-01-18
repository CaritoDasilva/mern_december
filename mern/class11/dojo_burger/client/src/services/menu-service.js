import axios from "axios";


export const createNewMenu = (menu) => axios.post('http://localhost:8080/api/menu', {
    menu
});

// export const getAllMenus...