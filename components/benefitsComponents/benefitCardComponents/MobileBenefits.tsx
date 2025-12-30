import BenefitCard from './BenefitCard';
import { benefits } from '../benefits.data';

const MobileBenefits = () => {
    return (
        <div className='flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory sm:hidden'>
            {benefits.map(benefit => (
                <div key={benefit.title} className='min-w-[85%] snap-center'>
                    <BenefitCard benefit={benefit} />
                </div>
            ))}
        </div>
    )
}

export default MobileBenefits;
