import HomeCarouselServer from '@/components/homeComponents/homeCarousel/HomeCarouselServer';
import FeaturedProducts from '@/components/homeComponents/featuredProducts/FeaturedProducts';
import GymEvents from '@/components/homeComponents/gymEvents/GymEvents';
import Faqs from '@/components/homeComponents/faqs/Faqs';
import ContactForm from '@/components/homeComponents/contactForm/ContactForm';
import HomeParallax from '@/components/homeComponents/homeParallax/HomeParallax';

const Home = () => {
    return (
        <div className='mt-4 md:mt-7'>
            <div className='px-3 sm:px-5 md:px-16 lg:px-24'>
                <HomeCarouselServer />
                <FeaturedProducts />
                <GymEvents />
            </div>
                <HomeParallax />
            <div className='px-3 sm:px-5 md:px-16 lg:px-24'>
                <Faqs />
                <ContactForm />
            </div>
        </div>
    )
}

export default Home;
