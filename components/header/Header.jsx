import Image from 'next/image'
import React from 'react'
import useMenuMobile from '../../customHooks/useMenuMobile'
import NavBar from '../navbar/NavBar'
import HeaderModule from "./Header.module.css"

const Header = () => {
    let {
        openMenu,
        open,
        closeMenu,
    } = useMenuMobile();
  return (
    <header className={HeaderModule.header}>
        <div className={HeaderModule.divLogo}>
            <Image src="/logo/logo2.png" alt="logo" width={40} height={40} className={HeaderModule.logo}/>
            <div className={HeaderModule.divCursiva}>
                <p className={HeaderModule.hyde}>HYDE</p>
                <p className={HeaderModule.cursiva}>English school</p>
            </div>
        </div>
        <div className={HeaderModule.divMenuBurguer}>
            <Image src="/iconos/menu.png" alt="icono del menu" width={20} height={20} onClick={openMenu}/>
        </div>
        <NavBar open={open} closeMenu={closeMenu} />
    </header>
  )
}

export default Header