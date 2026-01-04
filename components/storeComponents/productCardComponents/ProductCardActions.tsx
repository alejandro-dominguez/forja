'use client';

import DelayedLink from '@/components/customComponents/DelayedLink';
import scrollToRef from '@/utils/scrollToRef';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products.data';

type Props = {
    product: Product
}

const ProductCardActions = ({ product }: Props) => {
    const { addItem } = useCart()

    return (
        <div className='px-3 pb-3 flex gap-4 text-white font-medium'>
            <button
                onClick={() => addItem(product)}
                className='flex-1 grid place-items-center rounded-md border-2
                border-white/90 shadow text-[.9rem] py-[.65rem]
                transition-colors hover:bg-white/15 cursor-pointer'
            >
                Agregar
            </button>
            <DelayedLink
                href={`/tienda/${product.slug}`}
                onBeforeNavigate={() => scrollToRef('scroll-y-Body', 0)}
                className='flex-1 grid place-items-center rounded-md border-2
                border-white/50 shadow text-[.9rem] py-[.65rem]
                transition-colors hover:bg-white/15'
            >
                Ver más
            </DelayedLink>
        </div>
    )
}

export default ProductCardActions;
