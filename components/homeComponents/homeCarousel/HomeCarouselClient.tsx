'use client';

import { useEffect, useRef, useState } from 'react';
import type { CarouselSlide } from './HomeCarouselServer';
import HomeCarouselSlides from './homeCarouselComponents/HomeCarouselSlides';
import HomeCarouselControls from './homeCarouselComponents/HomeCarouselControls';

interface Props {
    slides: CarouselSlide[]
}

const HomeCarouselClient = ({ slides }: Props) => {
    const [ index, setIndex ] = useState(0)
    const [ isHovering, setIsHovering ] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        )
    }

    useEffect(() => {
        if (isHovering) return

        intervalRef.current = setInterval(nextSlide, 6000)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }
    }, [ isHovering, slides.length ])

    return (
        <section
            className='relative w-full h-[72svh] overflow-hidden
            rounded shadow-xs shadow-sky-950/50 mb-7'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <HomeCarouselSlides slides={slides} index={index} />
            <HomeCarouselControls
                onPrev={prevSlide}
                onNext={nextSlide}
                isFirst={index === 0}
                isLast={index === slides.length - 1}
            />
        </section>
    )
}

export default HomeCarouselClient;
