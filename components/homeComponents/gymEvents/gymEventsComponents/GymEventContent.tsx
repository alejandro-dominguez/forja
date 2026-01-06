'use client';

import Image from 'next/image';
import type { GymEvent } from '../gymEvents.data';
import { useState } from 'react';

const GymEventContent = (event: GymEvent) => {
    const { title, date, shortDescription, image } = event
    const [ loaded, setLoaded ] = useState(false)

    return (
        <>
        <div className='relative h-64 w-full overflow-hidden'>
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
        <div className='p-3'>
            <h3 className='font-dela-gothic-one text-2xl text-slate-100 my-1'>
                {title}
            </h3>
            <p className='text-slate-200 leading-tight my-2'>
                {shortDescription}
            </p>
            <p className='text-slate-300 text-sm'>
                {date}
            </p>
        </div>
        </>
    )
}

export default GymEventContent;
