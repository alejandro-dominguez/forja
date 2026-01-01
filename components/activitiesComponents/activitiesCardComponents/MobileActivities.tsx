import ActivityCard from './ActivityCard';
import { activities } from '../activities.data';

const MobileActivities = () => {
    return (
        <div className='flex gap-9 overflow-x-auto pb-6 snap-x snap-mandatory sm:hidden'>
            {activities.map(activity => (
                <div key={activity.id} className='min-w-[85%] snap-center'>
                    <ActivityCard activity={activity} />
                </div>
            ))}
        </div>
    )
}

export default MobileActivities;
