import Link from 'next/link';
import React from 'react';
import cursosModule from "./cursos.module.css";

const Cursos = () => {
  return (
    <section className={cursosModule.seccionPrincipal}>
        <h1 className={cursosModule.h1}>cursos para todos los niveles y edades</h1>
        <section className={cursosModule.seccionNiveles}>
            <hr />
            <div className={cursosModule.divNivel}>
                <p className={cursosModule.nivel}>KINDER:</p>
                <p className={cursosModule.edad}>Edad: 5 a 6 años.</p>
                <p className={cursosModule.objetivo}> Aprender inglés entre los 4 y 6 años implica muchos beneficios: mejoran su memoria, tienen un vocabulario más rico, tienen más flexibilidad de pensamiento y mejor habilidad para razonar. Los niños en edad preescolar pueden ser bilingües de una manera  natural y con poco esfuerzo con los recursos adecuados, eso hace que contribuya enormemente a su desarrollo integral.
                Temas: Familia, Animales, Ropa, Preposiciones, El tiempo, La escuela, Comida, Números.
                </p>
            </div>
            <hr />
            <div className={cursosModule.divNivel}>
                <p className={cursosModule.nivel}>KIDS:</p>
                <p className={cursosModule.edad}>Edad: 6 a 11 años.</p>
                <p className={cursosModule.edad}>Niveles: 4.</p>
                <p className={cursosModule.objetivo}> poner objetivos del kids en general
                </p>
            </div>
            <hr />
            <div className={cursosModule.divNivel}>
                <p className={cursosModule.nivel}>Pre eliminary:</p>
                <p className={cursosModule.edad}>Edad: 11 a 13 años.</p>
                <p className={cursosModule.objetivo}> La titulación Cambridge English: B1 Preliminary, antes conocida como Preliminary English Test (PET), es un examen de inglés de nivel intermedio. Su obtención demuestra que el alumno puede utilizar el inglés para el trabajo, el estudio y los viajes, y que puede comunicarse con angloparlantes sobre temas de la vida diaria. 
                </p>
            </div>
            <hr />
            <div className={cursosModule.divNivel}>
                <p className={cursosModule.nivel}>Teens:</p>
                <p className={cursosModule.edad}>Edad: 13 a 17 años.</p>
                <p className={cursosModule.edad}>Niveles: 4.</p>
                <p className={cursosModule.objetivo}> En esta fase, los alumnos trabajan la gramática y el vocabulario en función del nivel en el que se encuentran. Además, desarrollan competencias en lectura, escritura, comprensión auditiva y, sobre todo, expresión oral.
                </p>
            </div>
            <hr />
            <div className={cursosModule.divNivel}>
                <p className={cursosModule.nivel}>Adultos:</p>
                <p className={cursosModule.edad}>Edad: 18 años en adelante.</p>
                <p className={cursosModule.edad}>Niveles: 6.</p>
                <p className={cursosModule.objetivo}> poner el nivel de esta etapa
                </p>
            </div>
            <hr />
        </section>
        <div className={cursosModule.divMasInfo}>
            <Link href="/contacto">
                <a className={cursosModule.masInfo}>más informacion</a>
            </Link>
        </div>
    </section>
  )
}

export default Cursos