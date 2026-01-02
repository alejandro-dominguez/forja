import GymEventCard from './gymEventsComponents/GymEventCard';
import { events } from './gymEvents.data';
import { sortEventsByDateAsc, parseEventDate } from '@/utils/sortEventsByDate';

const GymEventsContainer = () => {
    const sortedEvents = sortEventsByDateAsc(events)
    const now = new Date()

    const upcomingEvents = sortedEvents.filter(
        e => parseEventDate(e.date) >= now
    )
    const pastEvents = sortedEvents.filter(
        e => parseEventDate(e.date) < now
    )

    return (
        <section className='mb-28'>
            <h2
                className='mb-8 font-dela-gothic-one tracking-wide text-dark
                text-center text-3xl md:text-4xl uppercase'
            >
                Eventos
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10'>
                {upcomingEvents[0] && (
                    <GymEventCard {...upcomingEvents[0]} />
                )}
                {pastEvents[0] && (
                    <GymEventCard {...pastEvents[0]} />
                )}
            </div>
        </section>
    )
}

export default GymEventsContainer;
