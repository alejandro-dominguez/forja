import Link from 'next/link';
import type { CarouselSlide } from '../HomeCarouselServer';

interface Props {
    slides: CarouselSlide[]
    index: number
}

const HomeCarouselSlides = ({ slides, index }: Props) => {
    return (
        <div
            className='flex h-full transition-transform duration-700 ease-in-out'
            style={{ transform: `translateX(-${index * 100}%)` }}
        >
            {slides.map(({ id, image, title, href }) => (
                <div
                    key={id}
                    className='flex-[0_0_100%] relative bg-cover bg-center brightness-125'
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div
                        className='absolute inset-0 bg-black/40 flex flex-col
                        justify-start items-start pt-3 pl-4 md:pt-4 md:pl-6 gap-4'
                    >
                        {
                            title === ' ' ? null :
                            <h3 
                                className='text-2xl sm:text-3xl font-extrabold pr-4 sm:pr-0
                                text-white text-shadow-sm text-shadow-sky-950/30
                                leading-7 sm:leading-normal'
                            >
                                {title}
                            </h3>
                        }
                        {
                            href === ' ' ? null :
                            <Link
                                href={href}
                                className='sm:px-4 sm:pt-1 sm:pb-1.5 bg-white/60 text-slate-900
                                font-semibold rounded-3xl hover:bg-white/80 transition-colors
                                text-sm sm:text-base px-3 pt-[.219rem] pb-1'
                            >
                                Ver más
                            </Link>
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomeCarouselSlides;
