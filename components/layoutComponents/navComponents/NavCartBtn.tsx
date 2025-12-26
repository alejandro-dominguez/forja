import Link from 'next/link';
import scrollToRef from '@/utils/scrollToRef';
import { FaCartShopping } from 'react-icons/fa6';

interface Props {
    onToggle: (newValue: boolean) => void
}

const NavCartBtn = ({ onToggle }: Props) => {
    return (
        <li className='z-50'>
            <Link
                href='/carrito'
                onClick={() => {
                    scrollToRef('scrollYBody', 0)
                    onToggle(false)
                }}
            >
                <FaCartShopping className='block text-3xl md:text-2xl' />
            </Link>
        </li>
    )
}

export default NavCartBtn;
