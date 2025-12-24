import Link from 'next/link';
import { IoLogoWhatsapp } from 'react-icons/io';

const WhatsappBtn = () => {
    return (
        <div
            className='fixed bottom-[16%] sm:bottom-[17%] right-4 grid place-items-center'
            id='wspBtn'
        >
            <Link
                href='https://wa.me/+5493462517689'
                referrerPolicy='no-referrer'
                rel='noopener'
                target='_blank'
            >
                <IoLogoWhatsapp
                    className='cursor-pointer text-green-700 text-3xl
                    sm:text-[2.75rem] drop-shadow-xs drop-shadow-green-900/50'
                />
            </Link>
        </div>
    )
}

export default WhatsappBtn;
