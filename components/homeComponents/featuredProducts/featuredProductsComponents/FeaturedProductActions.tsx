type Props = {
    id: number
}

const FeaturedProductActions = ({ id }: Props) => {
    return (
        <div
            className='px-4 pb-5 flex gap-6 text-white text-shadow
            text-shadow-darker font-medium tracking-wide'
        >
            <button
                className='flex-1 grid place-items-center rounded-md border-2
                border-white/90 shadow shadow-dark/30 text-[.9rem] font-semibold
                transition hover:bg-white/10 cursor-pointer pt-2 pb-[.65rem]'
            >
                Agregar
            </button>
            <button
                className='flex-1 grid place-items-center rounded-md border-2
                border-white/50 shadow shadow-dark/30 text-[.9rem] font-semibold
                transition hover:bg-white/10 cursor-pointer pt-2 pb-[.65rem]'
            >
                Ver más
            </button>
        </div>
    )
}

export default FeaturedProductActions;
