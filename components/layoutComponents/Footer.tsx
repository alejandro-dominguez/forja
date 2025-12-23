import FooterFirstCol from '@/components/layoutComponents/footerComponents/FooterFirstCol';
import FooterSecondCol from '@/components/layoutComponents/footerComponents/FooterSecondCol';
import FooterThirdCol from '@/components/layoutComponents/footerComponents/FooterThirdCol';
import FooterFourthCol from './footerComponents/FooterFourthCol';

const Footer = () => {
    return (
        <div className='flex h-40 justify-center bg-darker text-white text-[.9rem] tracking-wide'>
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
