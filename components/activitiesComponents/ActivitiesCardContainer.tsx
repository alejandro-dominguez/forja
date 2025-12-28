import ActivityCard from './ActivityCard'
import { activities } from './activities.data'

const ActivitiesCardContainer = () => {
    return (
        <section>
            <div className='flex gap-7 overflow-x-auto pb-4 snap-x snap-mandatory sm:hidden'>
                {activities.map(activity => (
                    <div
                        key={activity.id}
                        className='min-w-[85%] snap-center'
                    >
                        <ActivityCard activity={activity} />
                    </div>
                ))}
            </div>
            <div className='hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
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
