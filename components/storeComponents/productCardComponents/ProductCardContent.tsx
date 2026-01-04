import numberFormater from '@/utils/numberFormater';

type Props = {
    name: string
    description: string
    price: number
}

const ProductCardContent = ({ name, description, price }: Props) => {
    return (
        <div className='p-3 flex-1 flex flex-col text-white'>
            <div className='flex-1'>
                <h3 className='text-lg font-semibold leading-6'>
                    {name}
                </h3>
                <p className='mt-1 text-[.9rem] text-white/80 leading-5 line-clamp-1'>
                    {description}
                </p>
            </div>
            <div className='mt-1 font-medium text-[.95rem]'>
                {numberFormater(price)}
            </div>
        </div>
    )
}

export default ProductCardContent;
