'use client';

import Image from 'next/image';
import { useState } from 'react';

const ProductDetailImg = ({ image, name }: { image: string; name: string }) => {
    const [ loaded, setLoaded ] = useState(false)

    return (
        <div className='relative w-full h-60 lg:h-75'>
            {!loaded && (
                <div className='absolute inset-0 bg-white/10 animate-pulse rounded' />
            )}
            <Image
                src={image}
                alt={name}
                fill
                onLoadingComplete={() => setLoaded(true)}
                className={`object-contain drop-shadow transition-opacity duration-300
                ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    )
}

export default ProductDetailImg;
