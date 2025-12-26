'use client';

import Link from 'next/link';
import NavMenuBtn from './NavMenuBtn';
import { navItems } from '@/constants/navItems';
import { useState } from 'react';

const NavUl = () => {
    const [ showMobileMenu, setShowMobileMenu ] = useState(false)

    return (
        <div className='md:hidden'>
            <NavMenuBtn
                state={showMobileMenu}
                onToggle={setShowMobileMenu}
            />
            <div
                className={`
                    fixed inset-0 z-40 transition-transform duration-250
                    ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <div className='pt-14'>
                    <ul className='bg-[#b5c2ed] flex flex-col gap-3 w-screen p-4'>
                        {navItems.map(({ label, href }) => (
                            <li
                                key={href}
                                className='uppercase font-semibold text-slate-700'
                            >
                                <Link
                                    href={href}
                                    onClick={() => setShowMobileMenu(false)}
                                    className='nav-link py-2 mt-2'
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavUl;
