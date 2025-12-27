'use client';

import NavLogo from './NavLogo';
import NavUl from './NavUl';
import NavUlMd from './NavUlMd';
import { useState } from 'react';

const NavBar = () => {    
    const [ showMobileMenu, setShowMobileMenu ] = useState(false)
    
    return (
        <nav className='flex w-full max-w-7xl items-center justify-between'>
            <NavUl isVisible={showMobileMenu} onToggle={setShowMobileMenu} />
            <NavLogo onToggle={setShowMobileMenu} />
            <NavUlMd onToggle={setShowMobileMenu} />
        </nav>
    )
}

export default NavBar;
