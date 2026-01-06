import ActivityCardImg from './ActivityCardImg';
import { Activity } from '../activities.data';

type Props = {
    activity: Activity
}

const ActivityCard = ({ activity }: Props) => {
    const { cta, description, image, title } = activity

    return (
        <article
            className='bg-darker shadow shadow-darker/50 text-white
            flex flex-col border-4 border-darker rounded h-full'
        >
            <ActivityCardImg title={title} image={image} />
            <div className='p-3'>
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
