import React from 'react'
import Image from 'next/image'
import WppModule from "./Wpp.module.css"
import Link from 'next/link'

const Whatsapp = () => {
  return (
    <section className={WppModule.seccion}>
        <p className={WppModule.title}>Para comunicarte directamente con nosotros hace clic en la imagen de WhatsApp </p>
        <Link href="https://api.whatsapp.com/send?phone=541166659115">
          <a target="_blank">
            <Image src="/iconos/wpp.jpg" alt="Imagen del icono de whatsapp" width={200} height={200} className={WppModule.imagenWpp} />
          </a>
        </Link>
        <p className={WppModule.palabraWpp}>WhatsApp</p>
    </section>
  )
}

export default Whatsapp