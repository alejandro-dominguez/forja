import NoCartItemsCard from '@/components/cartComponents/NoCartItemsCard';

const Carrito = () => {
    return (
        <div className='px-3 sm:px-5 md:px-16 lg:px-24 flex flex-col items-start min-h-svh mt-4 md:mt-5'>
            <NoCartItemsCard />
        </div>
    )
}

export default Carrito;
