'use client';

import Image from 'next/image';
import type { Subsidiary } from '../subsidiries.data';

const SubsidiaryCard = (subsidiary: Subsidiary) => {
    const { title, location, activities, image } = subsidiary

    return (
        <article
            className='group bg-darker rounded border-4 border-darker shadow
            shadow-darker/50 overflow-hidden text-left relative'
        >
            <div className='relative h-100 w-full'>
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes='(max-width: 1024px) 100vw, 33vw'
                    className='object-cover transition-transform
                    duration-300 ease-out hover:scale-105 brightness-125'
                />
            </div>
            <div className='absolute bottom-0 w-full text-sm'>
                <div className='px-3 text-white mb-2'>
                    <span
                        className='font-medium tracking-wide text-[.9rem]
                        text-shadow-sm text-shadow-sky-950/30'
                    >
                        {location}
                    </span>
                    <h3
                        className='font-dela-gothic-one text-3xl tracking-wide leading-[2.15rem]
                        text-shadow-sm text-shadow-sky-950/30 uppercase'
                    >
                        {title}
                    </h3>
                </div>
                <div className='px-3 py-2 bg-darker'>
                    <p className='text-white'>
                        <span className='text-lighter leading-normal mb-[.2rem]'>
                            Actividades disponibles:
                        </span>
                        {activities}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default SubsidiaryCard;
