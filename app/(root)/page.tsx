import HomeCarouselServer from '@/components/homeComponents/homeCarousel/HomeCarouselServer';
import FeaturedProductsContainer from '@/components/homeComponents/featuredProducts/FeaturedProductsContainer';
import GymEventsContainer from '@/components/homeComponents/gymEvents/GymEventsContainer';
import FaqsContainer from '@/components/homeComponents/faqs/FaqsContainer';
import ContactForm from '@/components/homeComponents/contactForm/ContactForm';
import HomeParallax from '@/components/homeComponents/homeParallax/HomeParallax';

const Home = () => {
    return (
        <div className='mt-4 md:mt-5'>
            <div className='px-3 sm:px-5 md:px-16 lg:px-24'>
                <HomeCarouselServer />
                <FeaturedProductsContainer />
                <GymEventsContainer />
            </div>
                <HomeParallax />
            <div className='px-3 sm:px-5 md:px-16 lg:px-24'>
                <FaqsContainer />
                <ContactForm />
            </div>
        </div>
    )
}

export default Home;
