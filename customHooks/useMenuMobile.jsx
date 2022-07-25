import React, { useState } from 'react'

const useMenuMobile = () => {
    const [open, setOpen] = useState(false);
    
    const openMenu = () => setOpen(true)
    const closeMenu = () => setOpen(false)
        
    return {
        open,
        closeMenu,
        openMenu
    }
}

export default useMenuMobile