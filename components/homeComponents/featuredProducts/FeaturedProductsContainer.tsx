import ProductCard from '@/components/storeComponents/ProductCard';
import { products } from '@/data/products.data';

const FeaturedProductsContainer = () => {
    return (
        <section className='mb-20'>
            <h2
                className='mb-10 font-dela-gothic-one tracking-wide
                text-dark text-center text-3xl md:text-4xl uppercase'
            >
                DESTACADOS
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {products.map((product) => (
                    product.featured ?
                        <ProductCard key={product.id} product={product} />
                    : null
                ))}
            </div>
        </section>
    )
}

export default FeaturedProductsContainer;
