import logo from '@/public/logo-3.svg';
import Image from 'next/image';
import Link from 'next/link';

const FooterFourthCol = () => {
    return (
        <>
        <Link
            href='https://www.instagram.com/forjastore.ar'
            referrerPolicy='no-referrer'
            rel='noopener'  
            target='_blank'
            className='w-24 mt-2 sm:mt-0'
        >
            <Image src={logo} alt='Logo Forja' className='drop-shadow-amber-50/20 drop-shadow-sm' />
        </Link>
        <small className='text-center sm:hidden'>
            &copy; 2025 Pixel Coffee
        </small>
        </>
    )
}

export default FooterFourthCol;
