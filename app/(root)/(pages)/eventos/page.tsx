import GymEventCard from '@/components/homeComponents/gymEvents/gymEventsComponents/GymEventCard';
import { events } from '@/components/homeComponents/gymEvents/gymEvents.data';
import { sortEventsByDateAsc, parseEventDate } from '@/utils/sortEventsByDate';

const Eventos = () => {
    const sortedEvents = sortEventsByDateAsc(events)
    const now = new Date()

    const upcomingEvents = sortedEvents.filter(
        e => parseEventDate(e.date) >= now
    )
    const pastEvents = sortedEvents.filter(
        e => parseEventDate(e.date) < now
    )

    return (
        <section className='px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5'>
            <h1 className='text-4xl font-dela-gothic-one mb-6 uppercase text-transparent'>
                EVENTOS
            </h1>
            {upcomingEvents.length > 0 && (
                <div>
                    <h2 className='font-dela-gothic-one text-dark text-2xl md:text-3xl uppercase mb-3'>
                            PRÓXIMOS EVENTOS
                        </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {upcomingEvents.map(event => (
                            <GymEventCard key={event.id} {...event} />
                        ))}
                    </div>
                </div>
            )}
            <div>
                <h2 className='font-dela-gothic-one text-dark text-2xl md:text-3xl uppercase mt-5 mb-4'>
                    EVENTOS ANTERIORES
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {pastEvents.map(event => (
                        <GymEventCard key={event.id} {...event} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Eventos;
