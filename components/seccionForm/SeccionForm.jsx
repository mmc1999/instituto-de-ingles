import Image from 'next/image'
import React from 'react'
import Formulario from '../formulario/Formulario'
import Mapa from '../mapa/Mapa'
import FormModule from "./SeccionForm.module.css"

const SeccionForm = () => {

  return (
    <section className={FormModule.seccionPrincipal}>
        <p className={FormModule.titleForm}>Ponete en contacto con nosotros</p>
        <Formulario />
        <hr />
        <section className={FormModule.seccionMap}>
            <Mapa />
            <div className={FormModule.divAbajoMapa}>
              <div className={FormModule.divLogo}>
                  <Image src="/logo/logo2.png" alt="logo" width={40} height={40} className={FormModule.logo}/>
                  <div className={FormModule.divCursiva}>
                      <p className={FormModule.hyde}>HYDE</p>
                      <p className={FormModule.cursiva}>English school</p>
                  </div>
              </div>
              <div className={FormModule.divDirecciones}>
                <p className={FormModule.palabrasSinSpan}>
                  <span className={FormModule.spanDIreccion}>Direccion:</span> 
                  Godoy cruz 2463, La tablada
                </p>
                <p className={FormModule.palabrasSinSpan}>
                  <span className={FormModule.spanDIreccion}>Telefono:</span>
                    11 6665-9115
                </p>
                <p className={FormModule.palabrasSinSpan}>
                  <span className={FormModule.spanDIreccion}>Email:</span> 
                  hyde.english.school@outlook.es
                </p>
              </div>
            </div>
        </section>
        
    </section>
  )
}

export default SeccionForm