'use client';

import Image from 'next/image';
import logo from '@/public/logo-1.svg';
import scrollToRef from '@/utils/scrollToRef';
import DelayedLink from '@/components/customComponents/DelayedLink';
import { usePathname } from 'next/navigation';

const NavLogoMd = () => {
    const pathname = usePathname()
    const isHome = pathname === '/'

    if (isHome) {
        return (
            <button
                onClick={() => scrollToRef('scrollYBody', 0)}
                className='w-32 cursor-pointer outline-none mt-[0.028rem] hidden md:block'
                aria-label='ir arriba'
            >
                <Image src={logo} alt='Logo Forja' />
            </button>
        )
    }

    return (
        <DelayedLink
            href='/'
            className='w-32 outline-none mt-[0.028rem] hidden md:block'
            onBeforeNavigate={() => scrollToRef('scrollYBody', 0)}
        >
            <Image src={logo} alt='Logo Forja' />
        </DelayedLink>
    )
}

export default NavLogoMd;
