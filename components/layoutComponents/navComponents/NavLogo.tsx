'use client';

import Image from 'next/image';
import logo from '@/public/logo-1.svg';
import scrollToRef from '@/utils/scrollToRef';
import DelayedLink from '@/components/customComponents/DelayedLink';
import useIsMobile from '@/customHooks/useIsMobile';
import { usePathname } from 'next/navigation';

interface Props {
    onToggle: (newValue: boolean) => void
}

const NavLogo = ({ onToggle }: Props) => {
    const pathname = usePathname()
    const isHome = pathname === '/'
    const isMobile = useIsMobile(768)

    const handleClick = () => {
        scrollToRef('scroll-y-Body', 0)
        if (isMobile) {
            onToggle(false)
        }
    }

    if (isHome) {
        return (
            <button
                onClick={handleClick}
                className='w-28 md:w-32 cursor-pointer outline-none mt-[0.05rem] md:mt-[0.028rem] z-50'
                aria-label='ir arriba'
            >
                <Image src={logo} alt='Logo Forja' />
            </button>
        )
    }

    return (
        <DelayedLink
            href='/'
            className='w-28 md:w-32 outline-none mt-[0.05rem] md:mt-[0.028rem] z-50'
            onBeforeNavigate={handleClick}
        >
            <Image src={logo} alt='Logo Forja' />
        </DelayedLink>
    )
}

export default NavLogo;
