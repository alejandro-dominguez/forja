'use client';

import Image from 'next/image';
import Link from 'next/link';
import numberFormater from '@/utils/numberFormater';
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
                Mi Carrito
            </h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {/* LISTA DE PRODUCTOS */}
                <div className='lg:col-span-2 space-y-4'>
                    {items.map(item => (
                        <div
                            key={item.id}
                            className='flex gap-4 bg-white rounded-lg p-4 shadow'
                        >
                            <div className='relative w-24 h-24'>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className='object-contain'
                                />
                            </div>

                            <div className='flex-1'>
                                <h3 className='font-semibold text-dark'>
                                    {item.name}
                                </h3>

                                <p className='text-sm text-dark/70'>
                                    {numberFormater(item.price)}
                                </p>

                                <div className='flex items-center gap-3 mt-3'>
                                    <button
                                        onClick={() => decreaseQty(item.id)}
                                        className='px-3 py-1 border rounded'
                                    >
                                        -
                                    </button>

                                    <span className='font-medium'>
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() => increaseQty(item.id)}
                                        className='px-3 py-1 border rounded'
                                    >
                                        +
                                    </button>

                                    <button
                                        onClick={() => removeProduct(item.id)}
                                        className='ml-auto text-red-600 hover:underline'
                                        aria-label='Eliminar producto'
                                    >
                                        ❌
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RESUMEN */}
                <div className='bg-white rounded-lg p-6 shadow h-fit'>
                    <h2 className='text-xl font-semibold mb-4'>
                        Resumen
                    </h2>

                    <div className='flex justify-between text-sm mb-2'>
                        <span>Subtotal</span>
                        <span>{numberFormater(totalPrice)}</span>
                    </div>

                    <div className='flex justify-between text-lg font-semibold border-t pt-3'>
                        <span>Total</span>
                        <span>{numberFormater(totalPrice)}</span>
                    </div>

                    <Link
                        href='/checkout'
                        className='mt-5 block w-full text-center bg-main text-white py-3 rounded font-semibold'
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

export default CartPage
