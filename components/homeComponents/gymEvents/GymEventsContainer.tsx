import GymEventCard from './gymEventsComponents/GymEventCard'; 
import { events } from './gymEvents.data';

const GymEventsContainer = () => {
    return (
        <section className='mb-28'>
            <h2
                className='mb-8 font-dela-gothic-one tracking-wide text-dark
                text-center text-3xl md:text-4xl uppercase'
            >
                EVENTOS
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10'>
                {events.map(event => <GymEventCard key={event.id} {...event} />)}
            </div>
        </section>
    )
}

export default GymEventsContainer;
