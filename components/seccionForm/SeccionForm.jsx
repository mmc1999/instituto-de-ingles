import React, { useEffect, useState } from 'react'
import Formulario from '../formulario/Formulario'
import Ubicacion from '../ubicacion/Ubicacion';
import FormModule from "./SeccionForm.module.css"

const SeccionForm = () => {
  const [valor, setValor] = useState("")
  if (typeof window !== 'undefined') {
    useEffect(() => setValor(window.location.pathname.slice(1)), [valor])
  }
  return (
    <section className={FormModule.seccionPrincipal}>
        <p className={FormModule.titleForm}>Ponete en contacto con nosotros</p>
        <Formulario />
        {
          valor === "contacto"
          ? <Ubicacion />
          : ""
        }
    </section>
  )
}

export default SeccionForm