'use client';

import Image from 'next/image';
import logo from '@/public/logo-1.svg';
import Link from 'next/link';
import scrollTop from '@/utils/scrollTop';
import { usePathname } from 'next/navigation';

const NavLogoMd = () => {
    const pathname = usePathname()
    const isHome = pathname === '/'

    if (isHome) {
        return (
            <button
                onClick={scrollTop}
                className='w-32 cursor-pointer outline-none mt-1 hidden md:block'
                aria-label='ir arriba'
            >
                <Image src={logo} alt='Logo Forja' />
            </button>
        )
    }

    return (
        <Link href='/' className='w-32 outline-none mt-1 hidden md:block'>
            <Image src={logo} alt='Logo Forja' />
        </Link>
    )
}

export default NavLogoMd;
