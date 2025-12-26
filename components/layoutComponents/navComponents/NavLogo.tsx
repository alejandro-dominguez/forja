'use client';

import Image from 'next/image';
import logo from '@/public/logo-mobile.svg';
import Link from 'next/link';
import scrollToRef from '@/utils/scrollToRef';
import { usePathname } from 'next/navigation';

const NavLogo = () => {
    const pathname = usePathname()
    const isHome = pathname === '/'

    if (isHome) {
        return (
            <button
                onClick={() => scrollToRef('scrollYBody', 0)}
                className='w-8 cursor-pointer outline-none block md:hidden'
                aria-label='ir arriba'
            >
                <Image src={logo} alt='Logo Forja' />
            </button>
        )
    }

    return (
        <Link
            href='/'
            className='w-8 outline-none block md:hidden'
            onClick={() => scrollToRef('scrollYBody', 0)}
        >
            <Image src={logo} alt='Logo Forja' />
        </Link>
    )
}

export default NavLogo;
