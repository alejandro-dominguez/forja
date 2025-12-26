import FooterFirstCol from './footerComponents/FooterFirstCol';
import FooterSecondCol from './footerComponents/FooterSecondCol';
import FooterThirdCol from './footerComponents/FooterThirdCol';
import FooterFourthCol from './footerComponents/FooterFourthCol';

const Footer = () => {
    return (
        <footer
            className=' bg-darker text-white text-[.9rem] tracking-wide
            px-3 sm:px-5 md:px-16 lg:px-24 py-8 mt-20 flex justify-center'
        >
            <div
                className='w-full max-w-7xl flex flex-col gap-8 items-center
                md:flex-row md:justify-between md:items-start'
            >
                <FooterFirstCol />
                <FooterSecondCol />
                <FooterThirdCol />
                <FooterFourthCol />
            </div>
        </footer>
    )
}

export default Footer;
