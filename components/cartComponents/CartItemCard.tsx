'use client';

import numberFormater from '@/utils/numberFormater';
import CartItemImg from './cartItemCardComponents/CartItemImg';
import CartItemActions from './cartItemCardComponents/CartItemActions';
import { type CartItem } from '@/context/CartContext';

const CartItemCard = ({ item }: { item: CartItem }) => {
    const { image, name, price, quantity, id, slug } = item

    return (
        <div
            className='bg-darker rounded p-4 shadow-darker/50
            flex flex-col gap-3 sm:flex-row sm:gap-4 shadow'
        >
            <CartItemImg slug={slug} image={image} name={name} />
            <div className='flex-1 flex flex-col'>
                <h3 className='font-semibold text-white/95 mt-0.5'>
                    {name}
                </h3>
                <p className='text-sm text-white/80 mt-1'>
                    {numberFormater(price)}
                </p>
                <CartItemActions quantity={quantity} id={id} />
            </div>
        </div>
    )
}

export default CartItemCard;
