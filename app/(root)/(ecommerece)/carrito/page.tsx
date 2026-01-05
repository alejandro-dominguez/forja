'use client';

import Link from 'next/link';
import numberFormater from '@/utils/numberFormater';
import NoCartItemsCard from '@/components/cartComponents/NoCartItemsCard';
import CartItemCard from '@/components/cartComponents/CartItemCard';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
    const { items, clearCart, totalPrice } = useCart()

    return (
        items.length === 0 ?
            <section className='px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5'>
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
                    {/* RESUMEN */}
                    <div className='bg-white rounded-lg p-6 shadow h-fit'>
                        <div className='flex justify-between text-lg font-semibold'>
                            <h3 className='text-xl font-semibold mb-4'>
                                Total
                            </h3>
                            <span>
                                {numberFormater(totalPrice)}
                            </span>
                        </div>
                        <Link
                            href='/checkout'
                            className='mt-5 block w-full text-center bg-main
                            text-white py-3 rounded font-semibold'
                        >
                            Proceder al pago
                        </Link>
                        <button
                            onClick={clearCart}
                            className='mt-3 w-full border py-2 rounded text-sm'
                        >
                            Vaciar carrito
                        </button>
                    </div>
                </div>
            </section>
    )
}

export default CartPage;
