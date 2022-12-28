import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './FormRegister.module.css';

const FormRegister = (props) => {

    const { user, setUser } = props;
    const [errors, setErrors] = useState({
        userName: '',
        email: '',
        id: '',
        password: ''
    })

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
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(user.id)) {
            setErrors({ ...errors, id: 'Debe ingresar un rut válido!' })
        } else {
            setErrors({ ...errors, id: '' })

        }
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
                    <input type="text" name="userName" value={user.userName} required onChange={(e) => changeUser(e.target)} placeholder="Ingresa nombre de usuario" />
                    <p className={styles["error-msg"]}>{errors.userName !== '' && `*${errors.userName}`}</p>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={user.email} required onChange={(e) => changeUser(e.target)} placeholder="Ingresa email" />
                    <p className={styles["error-msg"]}>{errors.email !== '' && `*${errors.email}`}</p>
                    <label htmlFor="id">Carnet de identidad</label>
                    <input type="text" name="id" value={user.id} required onChange={(e) => changeUser(e.target)} placeholder="Ingresa tu número de identificación" />
                    <p className={styles["error-msg"]}>{errors.id !== '' && `*${errors.id}`}</p>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" required value={user.password} onChange={(e) => changeUser(e.target)} placeholder="Ingresa contraseña" />
                    <p className={styles["error-msg"]}>{errors.password !== '' && `*${errors.password}`}</p>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </form>
            </div>

        </div>
    )
}

export default FormRegister;