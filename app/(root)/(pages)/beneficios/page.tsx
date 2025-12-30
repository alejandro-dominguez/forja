import BenefitsCardContainer from '@/components/benefitsComponents/BenefitsCardContainer';
import BenefitsInfo from '@/components/benefitsComponents/BenefitsInfo';

const Beneficios = () => {
    return (
        <div className='px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5'>
            <BenefitsCardContainer />
            <BenefitsInfo />
        </div>
    )
}

export default Beneficios;
