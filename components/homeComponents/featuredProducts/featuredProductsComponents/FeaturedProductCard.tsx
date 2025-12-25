import FeaturedProductActions from './FeaturedProductActions';
import FeaturedProductContent from './FeaturedProductContent';

type Product = {
    id: number
    name: string
    image: string
    description: string
    price: string
}

type Props = {
    product: Product
}

const FeaturedProductCard = ({ product }: Props) => {
    const { id, name, image, description, price } = product

    return (
        <div
            className='bg-darker rounded overflow-hidden shadow
            shadow-black/50 border-4 border-darker'
        >
            <div className='h-52 w-full bg-white flex items-center justify-center'>
                <img
                    src={image}
                    alt={name}
                    className='h-full w-full object-contain p-4'
                />
            </div>
            <FeaturedProductContent
                name={name}
                description={description}
                price={price}
            />
            <FeaturedProductActions id={id} />
        </div>
    )
}

export default FeaturedProductCard;
