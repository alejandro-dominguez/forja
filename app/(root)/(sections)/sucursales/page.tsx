import SubsidiaryTabs from '@/components/subsidiaryComponents/SubsidiaryTabs';
import SubsidiaryCards from '@/components/subsidiaryComponents/SubsidiaryCards'; 
import SubsidiaryCardsMd from '@/components/subsidiaryComponents/SubsidiaryCardsMd'; 

// Pte. Roca 1436 - Catamarca 1741 - Bv. Avellaneda 566 Gimnasio "La Sede"

const Sucursales = () => {
    return (
        <div className='px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5'>
            <SubsidiaryCards />
            <SubsidiaryCardsMd />
            <SubsidiaryTabs />
        </div>
    )
}

export default Sucursales;
