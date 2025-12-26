import Link from 'next/link';
import { FaCartShopping } from 'react-icons/fa6';

const NavCartBtn = () => {
    return (
        <li className='z-50'>
            <Link href='/carrito'>
                <FaCartShopping className='block text-3xl md:text-2xl' />
            </Link>
        </li>
    )
}

export default NavCartBtn;
