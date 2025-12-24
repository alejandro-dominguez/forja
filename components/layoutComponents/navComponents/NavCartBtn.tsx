import Link from 'next/link';
import { FaCartShopping } from 'react-icons/fa6';

const NavCartBtn = () => {
    return (
        <li>
            <Link href='/carrito'>
                <FaCartShopping size={22} className='block' />
            </Link>
        </li>
    )
}

export default NavCartBtn;
