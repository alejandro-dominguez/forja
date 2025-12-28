'use client';

import NavCartBtn from './NavCartBtn';
import scrollToRef from '@/utils/scrollToRef';
import DelayedLink from '@/components/customComponents/DelayedLink';
import { navItems } from '@/constants/navItems';
import { usePathname } from 'next/navigation';

interface Props {
    onToggle: (newValue: boolean) => void
}

const NavUlMd = ({ onToggle }: Props) => {
    const pathname = usePathname()
    const isCart = pathname.includes('/carrito')

    return (
        <ul className={!isCart ? 'flex gap-4' : 'flex gap-4 mt-[.3rem]'}>
            {navItems.map(({ label, href }) => (
                <li key={href} className='uppercase font-semibold hidden md:block'>
                    <DelayedLink
                        href={href}
                        className='nav-link'
                        onBeforeNavigate={() => {scrollToRef('scroll-y-Body', 0)}}
                    >
                        {label}
                    </DelayedLink>
                </li>
            ))}
            <NavCartBtn onToggle={onToggle} />
        </ul>
    )
}

export default NavUlMd;

