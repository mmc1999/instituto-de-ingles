import React from 'react'
import Image from 'next/image'
import FooterModule from "./Footer.module.css"
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={FooterModule.footer}>
        <section className={FooterModule.primerSection}>
            <div className={FooterModule.divLogo}>
                <Link href="/">
                    <a>
                        <Image src="/logo/logo2.png" alt="logo" width={40} height={40} className={FooterModule.logo} />
                    </a>
                </Link>
                <div className={FooterModule.divCursiva}>
                    <p className={FooterModule.hyde}>HYDE</p>
                    <p className={FooterModule.cursiva}>English school</p>
                </div>
            </div>
            <div>
                <ul className={FooterModule.ul}>
                    <li className={FooterModule.li}>
                        <Link href="/">
                            <a className={FooterModule.enlace}>Inicio</a>
                        </Link>
                    </li>
                    <li className={FooterModule.li}>
                        <Link href="/cursos">
                            <a className={FooterModule.enlace}>Cursos</a>
                        </Link>
                    </li>
                    <li className={FooterModule.li}>
                        <Link href="/nosotros">
                            <a className={FooterModule.enlace}>Nosotros</a>
                        </Link>
                    </li>
                    <li className={FooterModule.li}>
                        <Link href="/contacto" scroll={true}>
                            <a className={FooterModule.enlace}>Contacto</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={FooterModule.divIconos}>
                <Link href="https://www.instagram.com/hydeenglish/" >
                    <a target="_blank">
                        <Image src="/iconos/icoInsta.svg" alt='logo de instagram' width={16} height={16}  />
                    </a>
                </Link>
            </div>
        </section>
        <section className={FooterModule.segundaSection}>
            <p>HYDE english school. Todos los derechos reservados. ©2022</p>
            <p className={FooterModule.diseñadoPor}>Designed by <Link href="https://matiascentorbi.vercel.app/"><a target="_blank" className={FooterModule.mc}>MC</a></Link></p>
        </section>
    </footer>
  )
}

export default Footer