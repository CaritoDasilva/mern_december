import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { getCharacters } from "../services/characters-service";

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState();
    
    const getOneCharacter = async () => {
        try {
            const characterFromService = await getCharacters(id);
            setCharacter(characterFromService.data)
            console.log("🚀 ~ file: CharacterDetail.js:12 ~ getOneCharacter ~ characterFromService", characterFromService)
        } catch (error) {
            console.log("🚀 ~ file: CharacterDetail.js:14 ~ getOneCharacter ~ error", error)
            
        }
    }

    useEffect(() => {
        getOneCharacter();
    }, [id])

    return (
        <div>
            <Link to={'/lista-completa'}>Volver a la tabla</Link>
            <h3>Soy un personaje</h3>
            {
                character && (
                    <div key={character.id} className="card-character">
                        <h3>{character.fullName}</h3>
                        <p>Familia: {character.family}</p>
                        <p>Título: {character.title}</p>
                        <img src={character.imageUrl} alt={`Foto de ${character.fullName}`} />
                    </div>
                )
            }
        </div>
    )
}

export default CharacterDetail;