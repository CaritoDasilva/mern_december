import axios from "axios";

export const getCharacters = (id) => id ? axios.get(`https://thronesapi.com/api/v2/Characters/${id}`) 
    : axios.get('https://thronesapi.com/api/v2/Characters');

