import Link from 'next/link';
import scrollToRef from '@/utils/scrollToRef';
import { FaCartShopping } from 'react-icons/fa6';

const NavCartBtn = () => {
    return (
        <li className='z-50'>
            <Link
                onClick={() => scrollToRef('scrollYBody', 0)}
                href='/carrito'
            >
                <FaCartShopping className='block text-3xl md:text-2xl' />
            </Link>
        </li>
    )
}

export default NavCartBtn;
