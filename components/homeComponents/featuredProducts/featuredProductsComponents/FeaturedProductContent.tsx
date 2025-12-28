import numberFormater from '@/utils/numberFormater';

type Props = {
    name: string
    description: string
    price: string
}

const FeaturedProductContent = ({ name, description, price }: Props) => {
    return (
        <div className='p-3 flex-1 flex flex-col'>
            <div className='flex-1'>
                <h3 className='text-lg font-semibold tracking-wide text-white'>
                    {name}
                </h3>
                <p className='mt-1 text-[.9rem] tracking-wide text-white/80 leading-snug'>
                    {description}
                </p>
            </div>
            <div className='mt-2 font-medium text-white/90'>
                {price}
            </div>
        </div>
    )
}

export default FeaturedProductContent;
