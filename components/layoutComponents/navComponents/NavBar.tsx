'use client';

import NavLogo from './NavLogo';
import NavLogoMd from './NavLogoMd';
import NavUl from './NavUl';
import NavUlMd from './NavUlMd';

const NavBar = () => {    
    return (
        <nav className='flex w-full max-w-7xl items-center justify-between'>
            <NavUl />
            <NavLogo />
            <NavLogoMd />
            <NavUlMd />
        </nav>
    )
}

export default NavBar;
