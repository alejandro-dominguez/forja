'use client'

import { useCart } from '@/context/CartContext';

const Checkout = () => {
    const { totalPrice, clearCart } = useCart()

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        clearCart()
        alert('Compra realizada')
    }

  return (
    <form onSubmit={submit} className='p-6 space-y-4 max-w-md mx-auto'>
        <h2>Checkout</h2>
        <input required placeholder='Nombre completo' />
        <input required placeholder='Email' type='email' />
        <input required placeholder='Teléfono' />
        <input required placeholder='Dirección' />
        <p>Total a pagar: ${totalPrice}</p>
        <button type='submit'>
            Confirmar compra
        </button>
    </form>
    )
}

export default Checkout;
