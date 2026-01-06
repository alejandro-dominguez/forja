'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
    title: string
    image: string
}

const EventDetailImg = ({ title, image }: Props) => {
    const [ loaded, setLoaded ] = useState(false)
    
    return (
        <div>
            {!loaded && (
                <div className='absolute inset-0 bg-white/10 animate-pulse' />
            )}
            <Image
                src={image}
                alt={title}
                fill
                onLoadingComplete={() => setLoaded(true)}
                className={`object-cover transition-opacity duration-300
                ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    )
}

export default EventDetailImg