'use client';

import DelayedLink from '@/components/customComponents/DelayedLink';
import scrollToRef from '@/utils/scrollToRef';

const HomeCarouselLink = ({ href }: { href: string }) => {
    return (
        <DelayedLink
            href={href}
            className='sm:px-4 sm:pt-1 sm:pb-1.5 bg-white/60 text-slate-900
            font-semibold rounded-3xl hover:bg-white/80 transition-colors
            text-sm sm:text-base px-3 pt-[.219rem] pb-1 -mt-1 sm:mt-0.5'
            onBeforeNavigate={() => scrollToRef('scrollYBody', 0)}
        >
            Ver más
        </DelayedLink>
    )
}

export default HomeCarouselLink;
