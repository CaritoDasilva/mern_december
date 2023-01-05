// Apis utilizan los siguientes verbos:
// GET => Para traer información
// POST => Para enviar información a través del request
// PUT => Modifica una entidad
// DELETE => Elimina un registro.
import axios from 'axios';

export const getListCharacters = async () => {
    try {
        const characters = await axios.get('https://rickandmortyapi.com/api/character');
        return characters;
    } catch(error) {
        console.log("🚀 ~ file: character.js:12 ~ getListCharacters ~ error", error)
        return error;
    }
//     axios.get('https://rickandmortyapi.com/api/character')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//     return response;
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
}
