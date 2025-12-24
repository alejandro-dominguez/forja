import FeaturedProductActions from './FeaturedProductActions';
import FeaturedProductContent from './FeaturedProductContent';

type Product = {
    name: string
    image: string
    description: string
    price: string
}

type Props = {
    product: Product
}

const FeaturedProductCard = ({ product }: Props) => {
    return (
        <div
            className='bg-darker/95 backdrop-blur rounded text-white
            overflow-hidden shadow-xl shadow-black/40'
        >
            <div className='h-56 w-full bg-white flex items-center justify-center'>
                <img
                    src={product.image}
                    alt={product.name}
                    className='h-full w-full object-contain p-4'
                />
            </div>
            <FeaturedProductContent
                name={product.name}
                description={product.description}
                price={product.price}
            />
            <FeaturedProductActions />
        </div>
    )
}

export default FeaturedProductCard;
