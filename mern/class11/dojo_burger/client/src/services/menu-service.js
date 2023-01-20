import axios from "axios";


export const createNewMenu = (menu) => axios.post('http://localhost:8080/api/menu', {
    menu
});

export const getAllMenus = () => axios.get('http://localhost:8080/api/menu');

export const deleteMenu = (id) => axios.delete(`http://localhost:8080/api/menu/${id}`);

export const getOneMenu = (id) => axios.get(`http://localhost:8080/api/menu/${id}`);

export const updateOneMenu = (id, menu) => axios.put(`http://localhost:8080/api/menu/${id}`, {
    menu
})