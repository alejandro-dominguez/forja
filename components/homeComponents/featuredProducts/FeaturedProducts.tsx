'use client'

import FeaturedProductCard from './featuredProductsComponents/FeaturedProductCard';

type Product = {
    name: string
    image: string
    description: string
    price: string
}

const products: Product[] = [
    {
        name: 'Guantes de Boxeo Leone',
        image: '/products/guantes-leone.jpg',
        description: 'Guantes profesionales ideales para entrenamiento y sparring.',
        price: '$45.000',
    },
    {
        name: 'Protector Bucal Twins',
        image: '/products/bucal-twins.jpg',
        description: 'Protección cómoda y segura para entrenamientos intensos.',
        price: '$8.500',
    },
]

const FeaturedProducts = () => {
    return (
        <section className='w-full mt-5 mb-20'>
            <h2 className='mb-7 font-dela-gothic-one tracking-wide text-dark text-center text-4xl'>
                DESTACADOS
            </h2>
            <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-2'>
                {products.map((product, index) => <FeaturedProductCard key={index} product={product} />)}
            </div>
        </section>
    )
}

export default FeaturedProducts;
