import ActivityCard from './ActivityCard';
import { activities } from './activities.data';

const ActivitiesCardContainer = () => {
    return (
        <section className='px-4 md:px-8'>
            <div
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                gap-8 max-w-7xl mx-auto'
            >
                {activities.map(activity => (
                    <ActivityCard
                        key={activity.id}
                        activity={activity}
                    />
                ))}
            </div>
        </section>
    )
}

export default ActivitiesCardContainer;
