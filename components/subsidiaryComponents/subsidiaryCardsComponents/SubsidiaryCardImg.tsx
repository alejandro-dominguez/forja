'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
    image: string
    title: string
}

const SubsidiaryCardImg = ({ title, image }: Props) => {
    const [ loaded, setLoaded ] = useState(false)
    
    return (
        <div className='relative h-100 w-full'>
            {!loaded && (
                <div className='absolute inset-0 bg-white/10 animate-pulse' />
            )}
            <Image
                src={image}
                alt={title}
                fill
                onLoadingComplete={() => setLoaded(true)}
                className={`object-cover transition-all duration-300 ease-out
                hover:scale-105 brightness-125
                ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    )
}

export default SubsidiaryCardImg;
