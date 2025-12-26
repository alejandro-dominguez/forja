'use client';

import FeaturedProductCard from './featuredProductsComponents/FeaturedProductCard';

type Product = {
    id: number
    name: string
    image: string
    description: string
    price: string
}

const products: Product[] = [
    {
        id: 1,
        name: 'Guantes de Boxeo Leone',
        image: '/products/guantes-leone.jpg',
        description: 'Guantes profesionales ideales para entrenamiento y sparring.',
        price: '$45.000',
    },
    {
        id: 2,
        name: 'Protector Bucal Twins',
        image: '/products/bucal-twins.jpg',
        description: 'Protección cómoda y segura para entrenamientos intensos.',
        price: '$8.500',
    },
    {
        id: 3,
        name: 'Guantes de Boxeo Leone',
        image: '/products/guantes-leone.jpg',
        description: 'Guantes profesionales ideales para entrenamiento y sparring.',
        price: '$45.000',
    },
    {
        id: 4,
        name: 'Protector Bucal Twins',
        image: '/products/bucal-twins.jpg',
        description: 'Protección cómoda y segura para entrenamientos intensos.',
        price: '$8.500',
    },
]

const FeaturedProducts = () => {
    return (
        <section className='mb-20'>
            <h2
                className='mb-10 font-dela-gothic-one tracking-wide
                text-dark text-center text-2xl md:text-4xl'
            >
                DESTACADOS
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {products.map((product) => (
                    <FeaturedProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default FeaturedProducts;
