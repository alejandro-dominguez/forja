'use client';

import NavLogo from './navComponents/NavLogo';
import NavUl from './navComponents/NavUl';

const Navbar = () => {
    return (
        <header
            className='sticky top-0 z-50 flex h-14 justify-center text-[.9rem] text-slate-500
            tracking-[0.01em] bg-main/20 backdrop-blur-sm px-3 sm:px-5 md:px-16 lg:px-24'
        >
            <nav className='flex w-full max-w-7xl items-center justify-between'>
                <NavLogo />
                <NavUl />
            </nav>
        </header>
    )
}

export default Navbar;
