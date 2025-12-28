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
                border-white/90 shadow shadow-dark/40 text-[.9rem] font-semibold
                transition hover:bg-white/15 cursor-pointer py-[.65rem]'
            >
                Agregar
            </button>
            <button
                className='flex-1 grid place-items-center rounded-md border-2
                border-white/50 shadow shadow-dark/40 text-[.9rem] font-semibold
                transition hover:bg-white/15 cursor-pointer py-[.65rem]'
            >
                Ver más
            </button>
        </div>
    )
}

export default FeaturedProductActions;
