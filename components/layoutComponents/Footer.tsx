import FooterFirstCol from '@/components/layoutComponents/footerComponents/FooterFirstCol';
import FooterSecondCol from '@/components/layoutComponents/footerComponents/FooterSecondCol';
import FooterThirdCol from '@/components/layoutComponents/footerComponents/FooterThirdCol';
import FooterFourthCol from '@/components/layoutComponents/footerComponents/FooterFourthCol';

const Footer = () => {
    return (
        <div
            className='flex justify-center bg-darker text-white
            text-[.9rem] tracking-wide md:px-16 lg:px-24 py-8 mt-10'
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
