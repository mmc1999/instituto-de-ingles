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
        <section>
           {/* <Mapa />*/}
            <div>
              <div className={FormModule.divLogo}>
                  <Image src="/logo/logo2.png" alt="logo" width={40} height={40} />
                  <div className={FormModule.divCursiva}>
                      <p className={FormModule.hyde}>HYDE</p>
                      <p className={FormModule.cursiva}>English school</p>
                  </div>
              </div>
              <div>
                <p>Tablada</p>
                <p>Godoy cruz 2463</p>
                <p>Tel: 11 6665-9115</p>
              </div>
            </div>
        </section>
        
    </section>
  )
}

export default SeccionForm