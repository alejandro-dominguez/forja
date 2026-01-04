'useClient';

import ProductCardImage from './productCardComponents/ProductCardImage';
import ProductCardContent from './productCardComponents/ProductCardContent';
import ProductCardActions from './productCardComponents/ProductCardActions';
import { Product } from '@/data/products.data';

const ProductCard = ({ product }: { product: Product }) => {
    const { name, image, description, price } = product

    return (
        <div className='bg-darker rounded shadow shadow-darker/50 border-4 border-darker flex flex-col'>
            <ProductCardImage image={image} name={name} />
            <ProductCardContent
                name={name}
                description={description}
                price={price}
            />
            <ProductCardActions product={product} />
        </div>
    )
}

export default ProductCard;
