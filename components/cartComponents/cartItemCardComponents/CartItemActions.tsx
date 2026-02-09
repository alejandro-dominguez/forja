'use client';

import { useCart } from '@/context/CartContext';
import { BiSolidMinusCircle, BiSolidPlusCircle, BiSolidTrash, } from 'react-icons/bi';

const CartItemActions = ({ quantity, id }: { quantity: number; id: number }) => {
    const { increaseQty, decreaseQty, removeProduct } = useCart()

    return (
        <div className='flex items-center justify-between mt-4 sm:mt-5'>
            <div className='flex items-center gap-4 text-white'>
                <button
                    onClick={() => decreaseQty(id)}
                    className='cursor-pointer'
                >
                    <BiSolidMinusCircle size={22} />
                </button>
                <span className='font-medium text-lg w-6 text-center'>
                    {quantity}
                </span>
                <button
                    onClick={() => increaseQty(id)}
                    className='cursor-pointer'
                >
                    <BiSolidPlusCircle size={22} />
                </button>
            </div>
            <button
                onClick={() => removeProduct(id)}
                className='text-white cursor-pointer'
            >
                <BiSolidTrash size={22} />
            </button>
        </div>
    )
}

export default CartItemActions;
