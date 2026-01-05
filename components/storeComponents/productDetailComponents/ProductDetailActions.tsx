'use client';

import { BiSolidPlusCircle, BiSolidMinusCircle } from 'react-icons/bi';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import type { Product } from '@/data/products.data';

const ProductDetailActions = ({ product }: { product: Product }) => {
    const { addItem } = useCart()
    const [ qty, setQty ] = useState(1)
    
    const handleAdd = () => { for (let i = 0; i < qty; i++) addItem(product) }
    
    return (
        <div className='flex flex-col gap-5 items-start w-fit mt-5 mx-auto md:mx-0'>
            <div className='flex items-center gap-3 w-fit mx-auto'>
                <button
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    className='cursor-pointer'
                >
                    <BiSolidMinusCircle size={22} />
                </button>
                    <div className='font-medium w-10 grid place-items-center text-lg'>
                        <span>
                            {qty}
                        </span>
                    </div>
                <button
                    onClick={() => setQty(q => q + 1)}
                    className='cursor-pointer'
                >
                    <BiSolidPlusCircle size={22} />
                </button>
            </div>
            <button
                onClick={handleAdd}
                className='grid place-items-center rounded-md border-2 font-medium
                border-white/90 shadow shadow-black/20 py-2 text-white px-5
                transition-colors hover:bg-white/15 cursor-pointer w-fit'
            >
                <span>
                    Agregar al carrito
                </span>
            </button>
        </div>
    )
}

export default ProductDetailActions;
