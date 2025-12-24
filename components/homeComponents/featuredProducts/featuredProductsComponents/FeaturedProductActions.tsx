const FeaturedProductActions = () => {
    return (
        <div className='px-5 pb-5 flex gap-3'>
            <button
                className='flex-1 rounded bg-primary py-2
                text-sm font-semibold transition
                hover:bg-primary/80 cursor-pointer'
            >
                Agregar
            </button>
            <button
                className='flex-1 rounded bg-primary py-2
                text-sm font-semibold transition
                hover:bg-primary/80 cursor-pointer'
            >
                Ver más
            </button>
        </div>
    )
}

export default FeaturedProductActions;
