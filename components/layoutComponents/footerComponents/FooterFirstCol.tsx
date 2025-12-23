import Link from 'next/link';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const FooterFirstCol = () => {
    return (
        <div className='flex flex-col items-start gap-1'>
            <h3 className='font-bold text-[.95rem]'>
                Contacto
            </h3>
            <Link
                href='https://wa.me/+5493462517689'
                referrerPolicy='no-referrer'
                rel='noopener'  
                target='_blank'
                className='flex gap-2 items-center'
            >
                <div className='grid place-items-center w-5'>
                    <FaPhoneAlt className='block' size={15} />
                </div>
                <span>
                    341-5555555
                </span>
            </Link>
            <Link
                href='https://www.instagram.com/somos_forja?igsh=MmVqaTR4dDIzMzNo'
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
                    contacto.forja@gmail.com
                </span>
            </div>
        </div>
    )
}

export default FooterFirstCol;
