import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { getCharacters } from "../services/characters-service";

const TableList = () => {
    const [list, setList] = useState([]);

    const getAllCharactersFromService = async () => {
        try {
            const listCharacters = await getCharacters();
            setList(listCharacters.data)
            console.log("🚀 ~ file: TableList.js:12 ~ getAllCharactersFromService ~ listCharacters", listCharacters)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getAllCharactersFromService();
    }, []);

    return (
        <div className="table-container">
            <Link to={'/'}>Volver al home</Link>
            <h1>Lista de personajes</h1>
            <Table striped bordered hover className="table-list">
                <thead>
                    <tr>
                        <th>Nombre Personaje</th>
                        <th>Título</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list?.map(character => (
                            <tr>
                                <td>{character.fullName}</td>
                                <td>{character.title}</td>
                                <td>
                                    <img src={character.imageUrl} alt="" />
                                </td>
                                <td>
                                    <Link to={`/personaje/${character.id}`}>Ver Info completa</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default TableList;