'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
    title: string
    image: string
}

const BenefitCardImg = ({ title, image }: Props) => {
    const [ loaded, setLoaded ] = useState(false)

    return (
        <>
        {!loaded && (
            <div className='absolute inset-0 bg-white/10 animate-pulse z-0' />
        )}
        <div className='absolute inset-0 bg-black/50 z-10' />
        <Image 
            src={image}
            alt={title}
            fill
            onLoadingComplete={() => setLoaded(true)}
            className={`object-cover transition-opacity duration-300
            ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
        </>
    )
}

export default BenefitCardImg