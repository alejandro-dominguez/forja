import Link from 'next/link';
import NavCartBtn from './NavCartBtn';
import { navItems } from '@/constants/navItems';

const NavUl = () => {
    return (
        <ul className='flex gap-4'>
            {navItems.map(({ label, href }) => (
                <li
                    key={href}
                    className='uppercase font-semibold'>
                    <Link href={href} className='nav-link'>
                        {label}
                    </Link>
                </li>
            ))}
            <NavCartBtn />
        </ul>
    )
}

export default NavUl;

