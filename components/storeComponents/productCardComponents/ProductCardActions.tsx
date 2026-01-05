'use client';

import DelayedLink from '@/components/customComponents/DelayedLink';
import scrollToRef from '@/utils/scrollToRef';
import toast from 'react-hot-toast';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products.data';

type Props = {
    product: Product
}

const ProductCardActions = ({ product }: Props) => {
    const { addItem } = useCart()

    const handleAdd = () => {
        addItem(product)
        toast.success('¡Producto Agregado!')
    }

    return (
        <div className='px-3 pb-3 flex gap-4 text-white font-medium'>
            <button
                onClick={handleAdd}
                className='flex-1 grid place-items-center rounded-md border-2
                border-white/90 shadow shadow-black/20 text-[.9rem] py-[.65rem]
                transition-colors hover:bg-white/15 cursor-pointer'
            >
                Agregar
            </button>
            <DelayedLink
                href={`/tienda/${product.slug}`}
                onBeforeNavigate={() => scrollToRef('scroll-y-Body', 0)}
                className='flex-1 grid place-items-center rounded-md border-2
                border-white/50 shadow shadow-black/20 text-[.9rem] py-[.65rem]
                transition-colors hover:bg-white/15'
            >
                Ver más
            </DelayedLink>
        </div>
    )
}

export default ProductCardActions;
