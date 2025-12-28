import Image from 'next/image';
import { Activity } from './activities.data';

type Props = {
    activity: Activity
}

const ActivityCard = ({ activity }: Props) => {
    const { cta, description, image, title } = activity

    return (
        <article
            className='bg-darker shadow shadow-darker/50 text-white
            flex flex-col border-2 border-darker rounded h-full'
        >
            <div className='relative h-60 w-full'>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className='object-cover'
                />
            </div>
            <div className='p-4'>
                <h3
                    className='mb-auto text-2xl font-extrabold
                    tracking-wider uppercase font-dela-gothic-one'
                    >
                    {title}
                </h3>
                <p className='font-semibold text-primary mt-1 mb-2'>
                    {cta}
                </p>
                <p className='text-sm text-white/85'>
                    {description}
                </p>
            </div>
        </article>
    )
}

export default ActivityCard;
