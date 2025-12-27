import SubsidiaryCard from './subsidiaryCardsComponents/SubsidiaryCard';

export type Subsidiary = {
    id: number
    title: string
    date: string
    description: string
    image: string
    type: 'recent' | 'upcoming'
}

const subsidiaries: Subsidiary[] = [
    {
        id: 1,
        title: 'Clínica de Boxeo Intensiva',
        date: '15 de Marzo 2025',
        description: 'Entrenamiento intensivo enfocado en técnica, combinaciones y sparring controlado.',
        image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop',
        type: 'recent',
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

const SubsidiaryCardsMd = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-3'>
            {subsidiaries.map(sub => <SubsidiaryCard key={sub.id} {...sub} />)}
        </section>
    )
}

export default SubsidiaryCardsMd;
