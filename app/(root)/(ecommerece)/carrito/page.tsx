'use client';

import Image from 'next/image';
import numberFormater from '@/utils/numberFormater';
import Link from 'next/link';
import NoCartItemsCard from '@/components/storeComponents/NoCartItemsCard';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
    const { items, increaseQty, decreaseQty, removeProduct, clearCart, totalPrice } = useCart()

    if (items.length === 0) {
        return (
            <section className='px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5'>
                <NoCartItemsCard />
            </section>
        )
    }

    return (
        <section className='px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5'>
            <h1 className='text-3xl font-dela-gothic-one mb-6 text-white'>
                Carrito
            </h1>
            <div className='space-y-4'>
                {items.map(item => (
                    <div
                        key={item.id}
                        className='flex items-center gap-4 bg-darker
                        border-4 border-darker rounded p-3'
                    >
                        <div className='relative w-20 h-20 bg-white rounded'>
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className='object-contain p-2'
                            />
                        </div>
                        <div className='flex-1 text-white'>
                            <h3 className='font-semibold'>{item.name}</h3>
                            <p className='text-sm'>
                                {numberFormater(item.price)}
                            </p>
                        <div className='flex gap-2 mt-2'>
                            <button
                                onClick={() => decreaseQty(item.id)}
                                className='px-3 border rounded'
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                onClick={() => increaseQty(item.id)}
                                className='px-3 border rounded'
                            >
                                +
                            </button>
                            <button
                                onClick={() => removeProduct(item.id)}
                                className='px-3 border rounded'
                                aria-label='Eliminar producto'
                            >
                                ❌
                            </button>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-6 text-white text-xl font-semibold'>
                Total: {numberFormater(totalPrice)}
            </div>
            <div className='mt-6 flex gap-4'>
                <Link
                    href='/checkout'
                    className='px-6 py-3 border-2 rounded font-semibold'
                >
                    Finalizar compra
                </Link>

                <button
                    onClick={clearCart}
                    className='px-6 py-3 border rounded'
                >
                    Vaciar carrito
                </button>
            </div>
        </section>
    )
}

export default CartPage;
