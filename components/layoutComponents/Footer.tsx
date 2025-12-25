'use client';

import FooterFirstCol from './footerComponents/FooterFirstCol';
import FooterSecondCol from './footerComponents/FooterSecondCol';
import FooterThirdCol from './footerComponents/FooterThirdCol';
import FooterFourthCol from './footerComponents/FooterFourthCol';

const Footer = () => {
    return (
        <div
            className='flex justify-center bg-darker text-white
            text-[.9rem] tracking-wide px-3 sm:px-5 md:px-16 lg:px-24 py-8 mt-20'
        >
            <div className='flex w-full max-w-7xl items-center justify-between'>
                <FooterFirstCol />
                <FooterSecondCol />
                <FooterThirdCol />
                <FooterFourthCol />
            </div>
        </div>
    )
}

export default Footer;
