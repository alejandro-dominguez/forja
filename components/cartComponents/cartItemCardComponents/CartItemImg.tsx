'use client';

import Image from 'next/image';
import DelayedLink from '@/components/customComponents/DelayedLink';
import scrollToRef from '@/utils/scrollToRef';
import { useState } from 'react';

type Props = {
    slug: string
    image: string
    name: string
}

const CartItemImg = ({ slug, image, name }: Props) => {
    const [ loaded, setLoaded ] = useState(false)

    return (
        <div className='relative w-full h-46 sm:w-24 sm:h-24'>
            {!loaded && (
                <div className='absolute inset-0 bg-white/10 animate-pulse rounded-xs' />
            )}
            <DelayedLink
                href={`/tienda/${slug}`}
                onBeforeNavigate={() => scrollToRef('scroll-y-Body', 0)}
            >
                <Image
                    src={image}
                    alt={name}
                    fill
                    onLoadingComplete={() => setLoaded(true)}
                    className={`object-cover rounded-xs shadow transition-opacity duration-300
                    ${loaded ? 'opacity-100' : 'opacity-0'}`}
                />
            </DelayedLink>
        </div>
    )
}

export default CartItemImg;
