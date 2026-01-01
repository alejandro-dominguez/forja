import Link from 'next/link';
import { PiInstagramLogoFill } from 'react-icons/pi';

const BenefitCardBtn = ({ href, label }: { href: string; label: string }) => {
    return (
        <Link
            href={href}
            referrerPolicy='no-referrer'
            rel='noopener'
            target='_blank'
            className='grid place-items-center p-3'
        >
            <div
                className='flex items-center justify-center gap-2 py-1.5 font-medium
                border-2 rounded-md transition-all duration-200 text-[.9rem] w-38
                shadow shadow-dark/40 ease-out tracking-wide hover:bg-white/15
                hover:border-white/90 border-white/50'
            >
                <PiInstagramLogoFill className='block' size={20} />
                <span>
                    {label}
                </span>
            </div>
        </Link>
    )
}

export default BenefitCardBtn;
