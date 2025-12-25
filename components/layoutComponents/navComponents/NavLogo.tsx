'use client';

import Image from 'next/image';
import logo from '@/public/logo-1.svg';
import Link from 'next/link';
import scrollTop from '@/utils/scrollTop';
import { usePathname } from 'next/navigation';

const NavLogo = () => {
    const pathname = usePathname()
    const isHome = pathname === '/'

    if (isHome) {
        return (
            <button
                onClick={scrollTop}
                className='w-32 cursor-pointer outline-none'
                aria-label='ir arriba'
            >
                <Image src={logo} alt='Logo Forja' />
            </button>
        )
    }

    return (
        <Link href='/' className='w-32 outline-none'>
            <Image src={logo} alt='Logo Forja' />
        </Link>
    )
}

export default NavLogo;
