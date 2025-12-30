import BenefitCard from './BenefitCard';
import { benefits } from '../benefits.data';

const Benefits = () => {
    return (
        <div className='hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
            {benefits.map(benefit => (
                <BenefitCard
                    key={benefit.title}
                    benefit={benefit}
                />
            ))}
        </div>
    )
}

export default Benefits;
