import React from 'react'
import {useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import moduleForm from "./moduleForm.module.css"

const Formulario = () => {
    const campo = "* campo requerido";

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().min(3, "Minimo 3 caracteres").required(campo),
        tema: Yup.string().min(4, "Minimo 4 caracteres").required(campo),
        email: Yup.string().email("Email invalido").required(campo),
        comentario: Yup.string().min(10, "Minimo 10 caracteres").required(campo),
    });

    const initialValues={tema: "", email: "", comentario:"", nombre: ""};

    const onSubmit = (values, resetForm) => {
        console.log(values)
        emailjs.send('service_e89k5es', 'template_kdnrdal', {
            nombre: values.nombre,
            comentario: values.comentario,
            tema: values.tema,
            email: values.email
        }, "jMk1WAgEfrguR9vt8")
            .then((result) => {
                formik.resetForm({values: ""});
                //agregar el modal
            }, (error) => {
                console.log(error.text);
            });
        
    };
  
  const formik = useFormik({initialValues, validationSchema ,onSubmit});
  let {handleChange,handleSubmit, values, errors, handleBlur, touched} = formik;
  return (
    <form onSubmit={handleSubmit} className={moduleForm.form}  >
        <div className={moduleForm.divInput}>
            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nombre}
                placeholder="Nombre"
                name='nombre'
                className={moduleForm.allInput}
            />
            {errors.nombre && touched.nombre && <p className={moduleForm.mensajeError}>{errors.nombre}</p>}
        </div>
        <div className={moduleForm.divInput}>
            <input
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
                name='email'
                className={moduleForm.allInput}
            />
            {errors.email && touched.email &&  <p className={moduleForm.mensajeError}>{errors.email}</p>}
        </div>
        <div className={moduleForm.divInput}>
            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.tema}
                placeholder="Tema"
                name='tema'
                className={moduleForm.allInput}
            />
            {errors.tema && touched.tema && <p className={moduleForm.mensajeError}>{errors.tema}</p>}
        </div>
        <div className={moduleForm.divInput}>
            <textarea 
                onChange={handleChange} 
                onBlur={handleBlur}
                value={values.comentario}
                placeholder="Comentario"
                className={`${moduleForm.textArea} ${moduleForm.allInput}`}
                name="comentario"
                
            ></textarea>
            {errors.comentario && touched.comentario && <p className={moduleForm.mensajeError}>{errors.comentario}</p>}  
        </div>
        
        <button type='submit' className={`${moduleForm.button} ${moduleForm.allInput}`} >Enviar</button>
    </form>
  )
}

export default Formulario