'use client';

import { useCart } from '@/context/CartContext';
import { BiSolidMinusCircle, BiSolidPlusCircle, BiSolidTrash } from 'react-icons/bi';

const CartItemActions = ({ quantity, id }: { quantity: number; id: number }) => {
    const { increaseQty, decreaseQty, removeProduct } = useCart()

    return (
        <div className='flex items-center gap-3 mt-4 sm:mt-5'>
            <div className='flex gap-3 text-white'>
                <button
                    onClick={() => decreaseQty(id)}
                    className='cursor-pointer'
                >
                    <BiSolidMinusCircle size={22} />
                </button>
                    <div className='font-medium w-10 grid place-items-center text-lg'>
                        <span>
                            {quantity}
                        </span>
                    </div>
                <button
                    onClick={() => increaseQty(id)}
                    className='cursor-pointer'
                >
                    <BiSolidPlusCircle size={22} />
                </button>
            </div>
            <button
                onClick={() => removeProduct(id)}
                className='ml-auto text-white cursor-pointer'
            >
                <BiSolidTrash size={22} />
            </button>
        </div>
    )
}

export default CartItemActions;
