import ActivityCard from './ActivityCard';
import { activities } from '../activities.data';

const Activities = () => {
    return (
        <div className='hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
            {activities.map(activity => (
                <ActivityCard
                    key={activity.id}
                    activity={activity}
                />
            ))}
        </div>
    )
}

export default Activities;
