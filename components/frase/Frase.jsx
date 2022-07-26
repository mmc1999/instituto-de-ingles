import React from 'react'
import Image from "next/image"
import FraseModule from "./Frase.module.css"


const Frase = () => {
  return (
    <section className={FraseModule.seccionPrincipal}>
        <Image src="/iconos/clever.png" alt="Icono de un cerebro" width={40} height={40} className={FraseModule.iconoClever}/>
        <p className={FraseModule.fraseMotivadora}>The best way to predict <br /> the future is to invent it</p>
        <p>Ya sea a través de nuestros programas de aprendizaje como participando de los viajes de estudio, vivirás y sentirás el idioma.</p>
        <p >Sumate a la experiencia HYDE. <span className={FraseModule.repetirFraseEspañol}>La unica manera de predecir el futuro es creandolo.</span> </p>
    </section>
  )
}

export default Frase