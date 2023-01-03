// Apis utilizan los siguientes verbos:
// GET => Para traer información
// POST => Para enviar información a través del request
// PUT => Modifica una entidad
// DELETE => Elimina un registro.
const axios = require('axios');

export const getListCharacters = async (id) => {
    try {
        let url = ''
        if(typeof id === 'undefined'){
            url = 'https://rickandmortyapi.com/api/character';
        }else{
            url = 'https://rickandmortyapi.com/api/character/' + id;
        }
        const characters = await axios.get(url);
        if(typeof id === 'undefined'){
            return characters.data.results;
        }else{
            return [characters.data];
        }
    } catch(error) {
        console.log("🚀 ~ file: character.js:12 ~ getListCharacters ~ error", error)
        return error;
    }
}
