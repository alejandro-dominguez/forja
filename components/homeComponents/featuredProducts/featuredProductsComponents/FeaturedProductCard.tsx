import FeaturedProductImage from './FeaturedProductImage';
import FeaturedProductActions from './FeaturedProductActions';
import FeaturedProductContent from './FeaturedProductContent';
import type { FeaturedProduct } from '../featuredProducts.data';

type Props = {
    product: FeaturedProduct
}

const FeaturedProductCard = ({ product }: Props) => {
    const { id, name, image, description, price } = product

    return (
        <div
            className='bg-darker rounded overflow-hidden shadow
            shadow-darker/50 border-4 border-darker flex flex-col'
        >
            <FeaturedProductImage image={image} name={name} />
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
