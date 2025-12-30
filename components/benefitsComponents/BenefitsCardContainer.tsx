import Benefits from './benefitCardComponents/Benefits';
import MobileBenefits from './benefitCardComponents/MobileBenefits';

const BenefitsCardContainer = () => {
    return (
        <section>
            <MobileBenefits />
            <Benefits />
        </section>
    )
}

export default BenefitsCardContainer;