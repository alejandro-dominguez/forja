'use client';

import logo from '@/public/logo-2.svg';
import Image from 'next/image';
import DelayedLink from '@/components/customComponents/DelayedLink';
import scrollToRef from '@/utils/scrollToRef';
import { IoArrowBackCircle } from 'react-icons/io5';

const NoCartItemsCard = () => {
    return (
        <DelayedLink
            href='/'
            className='px-12 md:px-20 py-5 md:py-6 rounded-md bg-darker
            shadow shadow-darker/50 text-white mx-auto mt-9'
            onBeforeNavigate={() => scrollToRef('scrollYBody', 0)}
        >
            <div className='flex flex-col items-center gap-4'>
                <h1
                    className='text-center font-bold text-lg grid
                    place-items-center leading-7'
                >
                    <span>
                        Aún no hay productos
                    </span>
                    <div className='flex items-center justify-center gap-2'>
                        <span>
                            en el carrito
                        </span>
                        <IoArrowBackCircle
                            size={30}
                            className='block text-lighter drop-shadow-amber-50/15 drop-shadow-xs'
                        />
                    </div>
                </h1>
                <div className='w-50 drop-shadow-amber-50/20 drop-shadow-sm'>
                    <Image
                        src={logo}
                        alt='Logo Forja'
                    />
                </div>
            </div>
        </DelayedLink>
    )
}

export default NoCartItemsCard;
