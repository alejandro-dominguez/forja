import BenefitsOl from './benefitsInfoComponents/BenefitsOl';
import BenefitPromos from './benefitsInfoComponents/BenefitPromos';

const BenefitsInfo = () => {
    return (
        <div>
            <h3
                className='mt-5 font-dela-gothic-one text-[1.325rem]
                sm:text2xl uppercase -tracking-[0.04em] text-dark'
            >
                ¿CÓMO SE APLICAN?
            </h3>
            <BenefitsOl />
            <BenefitPromos />
        </div>
    )
}

export default BenefitsInfo;
