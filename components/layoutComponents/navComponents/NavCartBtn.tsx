'use client';

import scrollToRef from '@/utils/scrollToRef';
import DelayedLink from '@/components/customComponents/DelayedLink';
import { FaCartShopping } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

interface Props {
    onToggle: (newValue: boolean) => void
}

const NavCartBtn = ({ onToggle }: Props) => {
    const pathname = usePathname()
    const isCart = pathname.includes('/carrito')

    if (isCart) {
        return (
            <li className='z-50 mt-[.3rem] md:mt-0'>
                <button
                    className='cursor-pointer'
                    onClick={() => {scrollToRef('scrollYBody', 0), onToggle(false)}}
                    aria-label='ir arriba'
                >
                    <FaCartShopping className='block text-3xl md:text-2xl' />
                </button>
            </li>
        )
    }

    return (
        <li className='z-50 mt-[.3rem] md:mt-0'>
            <DelayedLink
                href='/carrito'
                onBeforeNavigate={() => {
                    scrollToRef('scrollYBody', 0)
                    onToggle(false)
                }}
            >
                <FaCartShopping className='block text-3xl md:text-2xl' />
            </DelayedLink>
        </li>
    )
}

export default NavCartBtn;
