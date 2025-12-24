import logo from '@/public/logo-3.svg'
import Image from 'next/image';
import Link from 'next/link';

const FooterFourthCol = () => {
    return (
        <Link
            href='https://www.instagram.com/forjastore.ar'
            referrerPolicy='no-referrer'
            rel='noopener'  
            target='_blank'
            className='w-24'
        >
            <Image src={logo} alt='Logo Forja' className=' drop-shadow-amber-50/20 drop-shadow-sm' />
        </Link>
    )
}

export default FooterFourthCol;
