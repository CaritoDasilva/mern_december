import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import style from './ListMenu.module.scss';
import { useNavigate } from "react-router-dom";
import { deleteMenu, getAllMenus } from "../../services/menu-service";

const ListMenu = () => {
    const [listMenus, setListMenus] = useState([]);
    const navigate = useNavigate();

    const getMenusFromService = async () => {
        try {
            const menus = await getAllMenus();
            setListMenus(menus.data.menus);
            console.log("🚀 ~ file: ListMenu.js:15 ~ getMenusFromService ~ menus", menus)
        } catch (error) {
            console.log("🚀 ~ file: ListMenu.js:17 ~ getMenusFromService ~ error", error)
            
        }
    };

    const deleteMenuFromService = async (id) => {
        try {
            await deleteMenu(id);
            const newList = listMenus.filter(menu => menu._id !== id);
            setListMenus(newList);
            
        } catch (error) {
            console.log("🚀 ~ file: ListMenu.js:29 ~ deleteMenuFromService ~ error", error)
        }
    };

    useEffect(() => {
        getMenusFromService();
    }, []);

    return (
        <div className={style["list-menu-container"]}>
            <Button onClick={() => navigate("/nuevo-menu")} variant="info">Agregar menu</Button>

            <Table className={style["table-list"]} striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Calorías</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listMenus.length > 0 && listMenus.map(((menu, idx) => (
                        <tr key={menu._id}>
                            <td>{idx + 1}</td>
                            <td>{menu.title}</td>
                            <td>{menu.description}</td>
                            <td>{menu.price}</td>
                            <td>{menu.calories}</td>
                            <td>
                                <Button onClick={() => navigate(`/editar-menu/${menu._id}`)} variant="info">Editar</Button>
                                <Button onClick={() => deleteMenuFromService(menu._id)} variant="light">Eliminar</Button>
                            </td>
                        </tr>
                    )))}
                </tbody>
            </Table>
        </div>
    )

};

export default ListMenu;