type Props = {
    name: string
    description: string
    price: string
}

const FeaturedProductContent = ({ name, description, price }: Props) => {
    return (
        <div className='p-5'>
            <h3 className='text-lg font-semibold tracking-wide'>
                {name}
            </h3>
            <p className='mt-2 text-[.9rem] tracking-wide text-white/80'>
                {description}
            </p>
            <div className='mt-4 text-lg font-bold'>
                {price}
            </div>
        </div>
    )
}

export default FeaturedProductContent;
