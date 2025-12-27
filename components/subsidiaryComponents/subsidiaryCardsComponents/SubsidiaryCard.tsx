'use client';

import Image from 'next/image';
import type { Subsidiary } from '../SubsidiaryCards';

const SubsidiaryCard = (subsidiary: Subsidiary) => {
    const { title, location, activities, image } = subsidiary

    return (
        <div
            className='group bg-darker rounded border-4 border-darker shadow
            shadow-darker/50 overflow-hidden text-left relative'
        >
            <div className='relative h-110 w-full'>
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes='(max-width: 1024px) 100vw, 33vw'
                    className='object-cover transition-transform
                    duration-300 ease-out hover:scale-105 brightness-125'
                />
            </div>
            <div className='p-3 absolute top-0 text-white'>
                <span
                    className='font-medium tracking-wide text-[.9rem]
                    text-shadow-sm text-shadow-sky-950/30 mb-0.5'
                >
                    {location}
                </span>
                <h3
                    className='font-dela-gothic-one text-2xl tracking-wide
                    text-shadow-sm text-shadow-sky-950/30'
                >
                    {title}
                </h3>
            </div>
            <div className='p-3 pt-2 absolute bottom-0 bg-darker w-full text-sm'>
                <p className='text-white'>
                    <span className='text-lighter leading-normal mb-[.2rem]'>
                        Actividades disponibles:
                    </span>
                    {activities}
                </p>
            </div>
        </div>
    )
}

export default SubsidiaryCard;
