import SubsidiaryCard from './subsidiaryCardsComponents/SubsidiaryCard';
import { subsidiaries } from './subsidiries.data';

const SubsidiaryCardsContainer = () => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7'>
            {subsidiaries.map(subsidiary => <SubsidiaryCard key={subsidiary.id} {...subsidiary} />)}
        </section>
    )
}

export default SubsidiaryCardsContainer;
