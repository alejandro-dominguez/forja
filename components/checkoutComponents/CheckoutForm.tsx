'use client';

import numberFormater from '@/utils/numberFormater';
import { useCart } from '@/context/CartContext';
import CheckoutSubmitBtn from './checkoutFormComponents/CheckoutSubmitBtn';
import CheckoutFormTotal from './checkoutFormComponents/CheckoutFormTotal';
import CheckoutFormName from './checkoutFormComponents/CheckoutFormName';
import CheckoutFormAdress from './checkoutFormComponents/CheckoutFormAdress';
import CheckoutFormPhone from './checkoutFormComponents/CheckoutFormPhone';
import CheckoutFormEmail from './checkoutFormComponents/CheckoutFormEmail';

const CheckoutForm = () => {
    const { clearCart } = useCart()

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        clearCart()
        alert('Compra realizada')
    }

    return (
        <form
            onSubmit={submit}
            className='flex flex-col'
        >
            <div className='flex flex-col gap-1 text-light/90'>
                <CheckoutFormName />
                <CheckoutFormAdress />
                <CheckoutFormPhone />
                <CheckoutFormEmail />
            </div>
            <CheckoutFormTotal />
            <CheckoutSubmitBtn />
        </form>
    )
}

export default CheckoutForm;
