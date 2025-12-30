export type FeaturedProduct = {
    id: number
    name: string
    stock: boolean
    image: string
    description: string
    price: string
}

export const featuredProducts: FeaturedProduct[] = [
    {
        id: 1,
        name: 'Guantes de Boxeo Leone',
        stock: true,
        image: '/products/guantes-leone.png',
        description: 'Guantes profesionales ideales para entrenamiento y sparring.',
        price: '$45.000',
    },
    {
        id: 2,
        name: 'Protector Bucal Twins',
        stock: true,
        image: '/products/bucal-twins.png',
        description: 'Protección cómoda y segura para entrenamientos intensos.',
        price: '$8.500',
    },
    {
        id: 3,
        name: 'Guantes de Boxeo Leone',
        stock: true,
        image: '/products/guantes-leone.png',
        description: 'Guantes profesionales ideales para entrenamiento y sparring.',
        price: '$45.000',
    },
    {
        id: 4,
        name: 'Protector Bucal Twins',
        stock: true,
        image: '/products/bucal-twins.png',
        description: 'Protección cómoda y segura para entrenamientos intensos.',
        price: '$8.500',
    },
]
