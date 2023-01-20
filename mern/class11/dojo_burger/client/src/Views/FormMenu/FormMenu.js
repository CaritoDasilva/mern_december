import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from './FormMenu.module.scss';
import { createNewMenu, getOneMenu, updateOneMenu } from '../../services/menu-service';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";

const FormMenu = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [menu, setMenu] = useState({
        title: '',
        description: '',
        calories: '',
        price: 1
    });

    const getOneMenuFromsService = async () => {
        try {
            const editMenu = await getOneMenu(id);
            setMenu(editMenu.data.menu)
            
        } catch (error) {
            console.log("🚀 ~ file: FormMenu.js:25 ~ getOneMenuFromsService ~ error", error)
            
        }
    }

    useEffect(() => {
        id && getOneMenuFromsService();
    }, [id])

    const menuSchema = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Debe ingresar un título de menu'),
        description: Yup.string()
            .min(2, 'Too Short!')
            .required('Debe ingresar una de menu'),
        calories: Yup.number(),
        price: Yup.number()
            .required('Required')
            .min(1, 'No puede tener un valor inferior a $1')
        });

        const sendNewMenu = async (values) => {
            try {
                id ? await updateOneMenu(id, values) : await createNewMenu(values);
                navigate("/");
            } catch (error) {
                console.log("🚀 ~ file: FormMenu.js:28 ~ sendNewMenu ~ error", error)
                
            }
        }

    return (
        <div className={styles['form-container']}>
            <Button onClick={() => navigate("/")} variant="info">Volver</Button>

            <h1>Agregar Nuevo Menu</h1>
            <Formik
                enableReinitialize
                initialValues={menu}
                validationSchema={menuSchema}
                onSubmit={sendNewMenu}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="title">Título</label>
                        <Field name="title" />
                        {errors.title && touched.title ? (
                            <div>{errors.title}</div>
                        ) : null}
                        <label htmlFor="description">Descripción</label>
                        <Field name="description" />
                        {errors.description && touched.description ? (
                            <div>{errors.description}</div>
                        ) : null}
                        <label htmlFor="calories">Calorías</label>
                        <Field name="calories" type="number" />
                        {errors.calories && touched.calories ? <div>{errors.calories}</div> : null}
                        <label htmlFor="price">Precio</label>
                        <Field name="price" type="number" />
                        {errors.price && touched.price ? <div>{errors.price}</div> : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )

};

export default FormMenu;