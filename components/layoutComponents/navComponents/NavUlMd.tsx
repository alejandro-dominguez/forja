import Link from 'next/link';
import NavCartBtn from './NavCartBtn';
import scrollToRef from '@/utils/scrollToRef';
import { navItems } from '@/constants/navItems';

interface Props {
    onToggle: (newValue: boolean) => void
}

const NavUlMd = ({ onToggle }: Props) => {
    return (
        <ul className='flex gap-4'>
            {navItems.map(({ label, href }) => (
                <li key={href} className='uppercase font-semibold hidden md:block'>
                    <Link
                        href={href}
                        className='nav-link'
                        onClick={() => scrollToRef('scrollYBody', 0)}
                    >
                        {label}
                    </Link>
                </li>
            ))}
            <NavCartBtn onToggle={onToggle} />
        </ul>
    )
}

export default NavUlMd;

