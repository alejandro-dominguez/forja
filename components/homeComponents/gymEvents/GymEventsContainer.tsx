import GymEventCard from './gymEventsComponents/GymEventCard'; 

export type GymEvent = {
    id: number
    title: string
    date: string
    description: string
    image: string
    type: 'last' | 'upcoming'
}

const events: GymEvent[] = [
    {
        id: 1,
        title: 'Clínica de Boxeo Intensiva',
        date: '15 de Marzo 2025',
        description: 'Entrenamiento intensivo enfocado en técnica, combinaciones y sparring controlado.',
        image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop',
        type: 'last',
    },
    {
        id: 2,
        title: 'Seminario de Kickboxing',
        date: '5 de Abril 2025',
        description: 'Seminario abierto para todos los niveles, enfocado principalmente en striking y defensa.',
        image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1200&auto=format&fit=crop',
        type: 'upcoming',
    },
]

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
