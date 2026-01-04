import { products } from '@/data/products.data';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{ slug: string }>
}

const ProductDetail = async ({ params }: Props) => {
    const { slug } = await params

    const product = products.find(p => p.slug === slug)
    if (!product) notFound()

    return (
        <section className='px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5'>
            <div className='p-6 space-y-6'>
                <img src={product.image} className='h-64 mx-auto' />
                <h1>{product.name}</h1>
                <p>{product.longDescription}</p>
                <p>${product.price}</p>
            </div>
        </section>
    )
}

export default ProductDetail;
