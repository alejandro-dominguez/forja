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
                        justify-start items-start pt-4 pl-6 gap-5'
                    >
                        {
                            title === ' ' ? null :
                            <h3 
                                className='text-3xl font-extrabold text-center
                                text-white text-shadow-sm text-shadow-sky-950/30'
                            >
                                {title}
                            </h3>
                        }
                        {
                            href === ' ' ? null :
                            <Link
                                href={href}
                                className='px-5 pt-1 pb-1.5 bg-white/60 text-slate-900
                                font-semibold rounded-3xl hover:bg-white/80 transition-colors'
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
