import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './FormRegister.module.css';

const FormRegister = (props) => {

    const { user, setUser } = props;

    useEffect(() => {
        console.log("🚀 ~ file: FormRegister.js:17 ~ FormRegister ~ user", user)

    }, [user])

    const changeUser = (e) => {
    // console.log("🚀 ~ file: FormRegister.js:15 ~ changeUser ~ e", e.value)
        setUser({
            ...user,
            [e.name]: e.value
        })
    }

    const sendRegister = (e) => {
        e.preventDefault();
        console.log("🚀 ~ file: FormRegister.js:32 ~ sendRegister ~ user", user)
        alert('Hola chicos!')
    };

    return (
        <div className="container">
            <div className={styles["card-register"]}>

                {/* <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa nombre de usuario" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Carnet de identidad</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa número de identidad" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa contraseña" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> */}
                <form onSubmit={sendRegister}>
                    <label htmlFor="userName">Nombre de usuario</label>
                    <input type="text" name="userName" value={user.userName} onChange={(e) => changeUser(e.target)} placeholder="Ingresa nombre de usuario" />
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={user.email} onChange={(e) => changeUser(e.target)} placeholder="Ingresa email" />
                    <label htmlFor="id">Carnet de identidad</label>
                    <input type="text" name="id" value={user.id} onChange={(e) => changeUser(e.target)} placeholder="Ingresa tu número de identificación" />
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" value={user.password} onChange={(e) => changeUser(e.target)} placeholder="Ingresa contraseña" />
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </form>
            </div>

        </div>
    )
}

export default FormRegister;