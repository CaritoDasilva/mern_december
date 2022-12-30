import React, { useEffect, useState } from "react";
import { getListCharacters } from "../services/character";
import Button from 'react-bootstrap/Button';

const ListCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [click, setClick] = useState(0);

    const getCharactersFromService = async () => {
        try {
            const list = await getListCharacters();
            console.log("🚀 ~ file: ListCharacters.js:10 ~ getCharactersFromService ~ list", list)
            setCharacters(list.data.results);
        } catch (error) {
            console.log("🚀 ~ file: ListCharacters.js:11 ~ getCharactersFromService ~ error", error)
            
        }
    }

    useEffect(() => {
        getCharactersFromService();
    }, [click])

    return(
        <div>
            {characters?.map(character => (
                <div key={character.id} className="card-character">
                    <h3>{character.name}</h3>
                    <p>Status: {character.status}</p>
                    <p>Especie: {character.species}</p>
                    <img src={character.image} alt={`Foto de ${character.name}`} />
                </div>
            ))}
            <Button variant="dark" onClick={() => setClick(click + 1)}>CLick {click}</Button>
        </div>
    )
}

export default ListCharacters;