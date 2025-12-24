import Link from 'next/link';
import { RiWhatsappFill } from 'react-icons/ri';

const WhatsappBtn = () => {
    return (
        <div className='fixed bottom-26 right-5 grid place-items-center'>
            <Link
                href='https://wa.me/+5493462517689'
                referrerPolicy='no-referrer'
                rel='noopener'
                target='_blank'
            >
                <RiWhatsappFill
                    className='cursor-pointer text-green-700 text-3xl
                    sm:text-[2.75rem] drop-shadow-xs drop-shadow-green-900/50'
                />
            </Link>
        </div>
    )
}

export default WhatsappBtn;
