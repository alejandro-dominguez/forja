import Image from 'next/image';
import type { GymEvent } from '../gymEvents.data';

const GymEventContent = (event: GymEvent) => {
    const { title, date, shortDescription, image } = event

    return (
        <>
            <div className='relative h-64 w-full overflow-hidden'>
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes='(max-width: 1024px) 100vw, 50vw'
                    className='object-cover'
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
