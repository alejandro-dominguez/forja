import ActivityCard from './ActivityCard';
import { activities } from '../activities.data';

const MobileActivities = () => {
    return (
        <>
        <div className='flex gap-9 overflow-x-auto pb-6 snap-x snap-mandatory sm:hidden'>
            {activities.map(activity => (
                <div key={activity.id} className='min-w-[85%] snap-center'>
                    <ActivityCard activity={activity} />
                </div>
            ))}
        </div>
        <h3
            className='mt-6 text-dark tracking-wide text-lg font-semibold
            text-center uppercase font-dela-gothic-one leading-6 sm:hidden'>
            ¡Comienza ahora<br />tus clases!
        </h3>
        </>
    )
}

export default MobileActivities;
