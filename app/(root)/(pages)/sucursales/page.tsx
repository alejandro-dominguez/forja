import SubsidiaryTabs from '@/components/subsidiaryComponents/SubsidiaryTabs';
import SubsidiaryCards from '@/components/subsidiaryComponents/SubsidiaryCards'; 

const Sucursales = () => {
    return (
        <div className='px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5'>
            <SubsidiaryCards />
            <h2
                className='mt-6 font-dela-gothic-one tracking-wide text-dark
                text-center text-3xl md:text-4xl uppercase -mb-3 sm:mb-0'
            >
                HORARIOS
            </h2>
            <SubsidiaryTabs />
        </div>
    )
}

export default Sucursales;
