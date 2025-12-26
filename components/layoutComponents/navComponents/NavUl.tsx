'use client';

import Link from 'next/link';
import NavMenuBtn from './NavMenuBtn';
import scrollToRef from '@/utils/scrollToRef';
import { navItems } from '@/constants/navItems';

interface Props {
    isVisible: boolean
    onToggle: (newValue: boolean) => void
}

const NavUl = ({ isVisible, onToggle }: Props) => {
    return (
        <div className='md:hidden'>
            <NavMenuBtn isVisible={isVisible} onToggle={onToggle} />
            <div
                className={`fixed inset-0 z-40 transition-transform duration-250
                ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className='pt-14'>
                    <ul
                        className='bg-[#b5c2ed] grid grid-cols-2 place-items-center
                        gap-3 py-4 px-10 shadow shadow-darker/50'
                    >
                        {navItems.map(({ label, href }) => (
                            <li
                                key={href}
                                className='uppercase font-semibold text-slate-700'
                            >
                                <Link
                                    href={href}
                                    className='nav-link md:py-2 mt-2'
                                    onClick={() => {
                                        scrollToRef('scrollYBody', 0)
                                        onToggle(false)
                                    }}
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
