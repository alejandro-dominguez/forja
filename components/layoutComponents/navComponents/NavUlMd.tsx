import Link from 'next/link';
import NavCartBtn from './NavCartBtn';
import { navItems } from '@/constants/navItems';

const NavUlMd = () => {
    return (
        <ul className='flex gap-4'>
            {navItems.map(({ label, href }) => (
                <li
                    key={href}
                    className='uppercase font-semibold hidden md:block'>
                    <Link href={href} className='nav-link'>
                        {label}
                    </Link>
                </li>
            ))}
            <NavCartBtn />
        </ul>
    )
}

export default NavUlMd;

