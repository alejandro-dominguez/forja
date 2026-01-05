import scrollToRef from '@/utils/scrollToRef';
import DelayedLink from '../customComponents/DelayedLink';
import numberFormater from '@/utils/numberFormater';
import { useCart } from '@/context/CartContext';

const CartTotal = () => {
    const { totalPrice, clearCart } = useCart()

    return (
        <div className='bg-dark rounded p-4 h-fit shadow shadow-darker/50 text-white'>
            <div className='flex justify-between text-lg font-semibold'>
                <h3 className='text-lg font-bold mb-1 tracking-wide'>
                    Total
                </h3>
                <span className='font-medium tracking-tight'>
                    {numberFormater(totalPrice)}
                </span>
            </div>
            <div className='flex flex-col gap-2'>
                <DelayedLink
                    href='/checkout'
                    className='mt-5 block w-full text-center bg-light shadow-darker/15
                    text-white py-3 rounded-md font-semibold shadow'
                    onBeforeNavigate={() => scrollToRef('scroll-y-Body', 0)}
                >
                    Proceder al pago
                </DelayedLink>
                <button
                    onClick={clearCart}
                    className='rounded-md border-2 mt-3 text-center py-2
                    border-white/90 shadow shadow-black/10 font-medium
                    transition-colors hover:bg-white/15 cursor-pointer'
                >
                    Vaciar carrito
                </button>
            </div>
        </div>
    )
}

export default CartTotal;
