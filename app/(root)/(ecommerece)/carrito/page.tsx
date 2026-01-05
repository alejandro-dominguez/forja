'use client';

import NoCartItemsCard from '@/components/cartComponents/NoCartItemsCard';
import CartItemCard from '@/components/cartComponents/CartItemCard';
import CartTotal from '@/components/cartComponents/CartTotal';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
    const { items } = useCart()

    return (
        items.length === 0 ?
            <section className='px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5 min-h-svh md:min-h-auto'>
                <NoCartItemsCard />
            </section>
        :
            <section className='px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5 min-h-svh'>
                <h1 className='font-dela-gothic-one text-dark text-2xl md:text-3xl uppercase mb-3'>
                    MI CARRITO
                </h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <div className='lg:col-span-2 space-y-4'>
                        {items.map(item => (
                            <CartItemCard key={item.id} item={item} />
                        ))}
                    </div>
                    <CartTotal />
                </div>
            </section>
    )
}

export default CartPage;
