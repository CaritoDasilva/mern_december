import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const FormRegister = () => {

    const registerSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(3, '*Debe tener mínimo 3 caracteres!')
            .max(30, '*Debe tener máximo 30 caracteres!!')
            .required('*Este campo es requerido'),
        password: Yup.string()
            .length(6, '*Debe tener 6 caracteres')
            .required('*Este campo es requerido')
            .oneOf([Yup.ref('confirmPassword'), null], '*Ambas contraseñas deben coincidir'),
        confirmPassword: Yup.string()
            .length(6, '*Debe tener 6 caracteres')
            .oneOf([Yup.ref('password'), null], '*Ambas contraseñas deben coincidir')
            .required('*Este campo es requerido'),
        email: Yup.string().email('Correo inválido').required('*Este campo es requerido'),
        rut: Yup.string()
            .matches(/^[0-9]+[-|‐]{1}[0-9kK]{1}$/, '*Debe ingresar un rut con el siguiente formato 11111111-1')
            .required('*Este campo es requerido'),
    });

    const initialValues = {
        fullName: '',
        password: '',
        confirmPassword: '',
        email: '',
        rut: '',
    };


    return (
        <div>
            <h1>Formulario de Registro</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="fullName">Nombre de usuario</label>
                        <Field name="fullName" />
                        {errors.fullName && touched.fullName ? (
                            <div className="error-msg">{errors.fullName}</div>
                        ) : null}
                        <label htmlFor="password">Contraseña</label>
                        <Field name="password" type="password" />
                        {errors.password && touched.password ? (
                            <div className="error-msg">{errors.password}</div>
                        ) : null}
                        <label htmlFor="confirmPassword">Confirmar contraseña</label>
                        <Field name="confirmPassword" type="password" />
                        {errors.confirmPassword && touched.confirmPassword ? (
                            <div className="error-msg">{errors.confirmPassword}</div>
                        ) : null}
                        <label htmlFor="email">Correo electrónico</label>
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div className="error-msg">{errors.email}</div> : null}
                        <label htmlFor="rut">Rut</label>
                        <Field name="rut" />
                        {errors.rut && touched.rut ? (
                            <div className="error-msg">{errors.rut}</div>
                        ) : null}
                        <button type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormRegister;