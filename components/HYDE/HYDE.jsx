import Image from 'next/image'
import React from 'react'
import HydeModule from "./Hyde.module.css"


const HYDE = () => {
  return (
    <div className={HydeModule.divPrincipal}>
        <div>
            <Image src="/logo/logo2.png" alt="logo" width={80} height={80} className={HydeModule.logo} />
        </div>
        <div className={HydeModule.divParrafo}>
            <p className={HydeModule.parrafo}>
                En nuestro instituto, los alumnos aprenden en clases dinámicas y divertidas. 
                Nos preocupamos por que los grupos sean reducidos y nivelados para que cada uno rinda al máximo. 
                Contamos con zona de WIFI.
            </p>
        </div>
    </div>
  )
}

export default HYDE