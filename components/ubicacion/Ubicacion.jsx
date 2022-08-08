import React from 'react'
import FormModule from "../seccionForm/SeccionForm.module.css"
import Mapa from '../mapa/Mapa'
import Image from 'next/image'


const Ubicacion = () => {
  return (
    <>
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
                <p className={FormModule.palabrasSinSpan}><span className={FormModule.spanDIreccion}>Direccion:</span> Godoy cruz 2463, La tablada</p> 
                <p className={FormModule.palabrasSinSpan}><span className={FormModule.spanDIreccion}>Telefono:</span> 11 6665-9115</p>
                <p className={FormModule.palabrasSinSpan}><span className={FormModule.spanDIreccion}>Email:</span> ingleshyde@gmail.com</p> 
              </div>
            </div>
        </section>
    </>
    
  )
}

export default Ubicacion