'use client'

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
            <h2 className='mb-6 font-dela-gothic-one tracking-wide text-dark text-center text-3xl'>
                DESTCADOS
            </h2>

            <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-2'>
                {products.map((product, index) => (
                    <div
                        key={index}
                        className='bg-darker/95 backdrop-blur rounded text-white
                        overflow-hidden shadow-xl shadow-black/40'
                    >
                        {/* Imagen */}
                        <div className='h-56 w-full bg-white flex items-center justify-center'>
                            <img
                                src={product.image}
                                alt={product.name}
                                className='h-full w-full object-contain p-4'
                            />
                        </div>

                        {/* Contenido */}
                        <div className='p-5'>
                            <h3 className='text-lg font-semibold tracking-wide'>
                                {product.name}
                            </h3>

                            <p className='mt-2 text-[.9rem] tracking-wide text-white/80'>
                                {product.description}
                            </p>

                            <div className='mt-4 text-lg font-bold'>
                                {product.price}
                            </div>

                            {/* Acciones */}
                            <div className='mt-5 flex gap-3'>
                                <button
                                    className='flex-1 rounded bg-primary py-2
                                    text-sm font-semibold transition
                                    hover:bg-primary/80 cursor-pointer'
                                >
                                    Agregar
                                </button>

                                <button
                                    className='flex-1 rounded bg-primary py-2
                                    text-sm font-semibold transition
                                    hover:bg-primary/80 cursor-pointer'
                                >
                                    Ver más
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedProducts
