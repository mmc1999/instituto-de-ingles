import React from 'react'
import Link from "next/link"
import NavBarModule from "./NavBar.module.css"
import Image from 'next/image'

const NavBar = ({open, closeMenu}) => {
  return (
    <nav className={`${NavBarModule.nav} ${open ? NavBarModule.navNO : ""}`} onClick={closeMenu}>
            <div className={NavBarModule.divCancelar}>
                <Image src="/iconos/cancel.png" alt='Icono de cancelar' width={20} height={20} onClick={closeMenu}/>
            </div>
            <ul className={NavBarModule.ul}>
                <li className={NavBarModule.li}>
                    <Link href="/">
                        <a className={NavBarModule.enlace}>Inicio</a>
                    </Link>
                </li>
                <span className={NavBarModule.lineaDivisoria}></span>
                <li className={NavBarModule.li}>
                    <Link href="/cursos">
                        <a className={NavBarModule.enlace}>Cursos</a>
                    </Link>
                </li>
                <span className={NavBarModule.lineaDivisoria}></span>
                <li className={NavBarModule.li}>
                    <Link href="/nosotros">
                        <a className={NavBarModule.enlace}>Nosotros</a>
                    </Link>
                </li>
                <span className={NavBarModule.lineaDivisoria}></span>
                <li className={NavBarModule.li}>
                    <Link href="/contacto" scroll={true}>
                        <a className={NavBarModule.enlace}>Contacto</a>
                    </Link>
                </li>
                <span className={NavBarModule.lineaDivisoria}></span>
            </ul>
    </nav>
  )
}

export default NavBar