import SubsidiaryCard from './subsidiaryCardsComponents/SubsidiaryCard';

// agregar horarios al tipo Subsidiary 

export type Subsidiary = {
    id: number
    location: string
    title: string
    activities: string
    image: string
}

const subsidiaries: Subsidiary[] = [
    {
        id: 1,
        title: 'Sede Roca',
        location: 'Pte. Roca 1436',
        activities: 'Boxeo, Kickboxing, MMA, Sala de Musculación, Brazilian Jiu-Jitsu, Kickboxing Femenino Taekwondo, Sparring General, Sparring MMA',
        image: 'https://i.ibb.co/v69QVwSL/544834309-18385643968127824-4804319152228153866-n.png',
    },
    {
        id: 2,
        title: 'Sede Catamarca',
        location: 'Catamarca 1741',
        activities: 'Boxeo, Kickboxing, MMA, Muay Thai, Kickboxing',
        image: 'https://i.ibb.co/KcP4FxX1/544890168-18385640887127824-4032547982706005760-n.png',
    },
    {
        id: 3,
        title: 'Sede Avellaneda',
        location: 'Bv. Avellaneda 566 Gimnasio "La Sede"',
        activities: 'Boxeo, Kickboxing, Muay Thai, Brazilian Jiu Jitsu',
        image: 'https://i.ibb.co/1Gv4BMY7/545341702-18385640899127824-5228984911123405386-n.png',
    },
]

const SubsidiaryCardsContainer = () => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7'>
            {subsidiaries.map(subsidiary => <SubsidiaryCard key={subsidiary.id} {...subsidiary} />)}
        </section>
    )
}

export default SubsidiaryCardsContainer;
