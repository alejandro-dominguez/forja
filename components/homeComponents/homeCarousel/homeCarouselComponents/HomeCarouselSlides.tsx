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
            {slides.map((slide) => (
                <div
                    key={slide.id}
                    className='flex-[0_0_100%] relative bg-cover bg-center brightness-125'
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div
                        className='absolute inset-0 bg-black/40 flex flex-col
                        justify-start items-start pt-4 pl-6 gap-5'
                    >
                        {
                            slide.title === ' ' ? null :
                            <h3 className='text-3xl font-extrabold text-center
                            text-white text-shadow-sm text-shadow-sky-950/30'>
                                {slide.title}
                            </h3>
                        }
                        {
                            slide.href === ' ' ? null :
                            <Link
                                href={slide.href}
                                className='px-5 py-1 bg-white/60 text-slate-900 font-semibold
                                rounded-3xl hover:bg-white/80 transition-colors'
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
