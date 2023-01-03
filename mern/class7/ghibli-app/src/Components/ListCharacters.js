import React, { useEffect, useState } from "react";
import { getListCharacters } from "../services/character";

const ListCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [id, setId] = useState()

    const getCharactersFromService = async () => {
        try {
            const list = await getListCharacters(id);
            setCharacters(list);
        } catch (error) {
            return error;
        }
    }

    useEffect(() => {
        getCharactersFromService();
    }, [id])   // Vuelve a renderizar

    return(
        <div>
            {
                id > 0 && <button onClick={() => setId()}>Volver</button>
            }
            
            {
                characters?.map(character => (
                    <div key={character.id} className="card-character" onClick={() => setId(character.id)}>
                        <h3>{character.name}</h3>
                        <p>Status: {character.status}</p>
                        <p>Especie: {character.species}</p>
                        <img src={character.image} alt={`Foto de ${character.name}`} />
                    </div>
                ))
            }
        </div>
    )
}

export default ListCharacters;
