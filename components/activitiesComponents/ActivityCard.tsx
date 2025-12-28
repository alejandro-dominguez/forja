import Image from 'next/image';
import { Activity } from './activities.data';

type Props = {
    activity: Activity
}

const ActivityCard = ({ activity }: Props) => {
    const { cta, description, image, title } = activity

    return (
        <article className='bg-darker rounded overflow-hidden shadow shadow-darker/50 text-white'>
            <div className='relative h-70 w-full'>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className='object-cover'
                />
                <h3 className='absolute top-4 left-4 text-2xl font-extrabold tracking-wide uppercase'>
                    {title}
                </h3>
            </div>
            <div className='p-5'>
                <p className='font-semibold text-primary mb-2'>
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
