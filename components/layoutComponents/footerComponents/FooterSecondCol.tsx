import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa6';
import { PiInstagramLogoFill } from 'react-icons/pi';

const FooterSecondCol = () => {
    return (
        <div className='flex flex-col items-start gap-[.4rem]'>
            <h3 className='font-bold text-[.95rem]'>
                Contacto
            </h3>
            <Link
                href='https://wa.me/+5493412820807'
                referrerPolicy='no-referrer'
                rel='noopener'  
                target='_blank'
                className='flex gap-2 items-center'
            >
                <div className='grid place-items-center w-5'>
                    <FaPhoneAlt className='block' size={15} />
                </div>
                <span>
                    341-2820807
                </span>
            </Link>
            <Link
                href='https://www.instagram.com/somos_forja'
                referrerPolicy='no-referrer'
                rel='noopener'  
                target='_blank'
                className='flex gap-2 items-center'
            >
                <div className='grid place-items-center w-5'>
                    <PiInstagramLogoFill className='block' size={19} />
                </div>
                <span>
                    somos_forja
                </span>
            </Link>
            <div className='flex gap-2 items-center'>
                <div className='grid place-items-center w-5'>
                    <FaEnvelope className='block' size={16} />
                </div>
                <span>
                    contacto_forja@gmail.com
                </span>
            </div>
        </div>
    )
}

export default FooterSecondCol;
