'use client';

import DelayedLink from '@/components/customComponents/DelayedLink';
import scrollToRef from '@/utils/scrollToRef';
import Image from 'next/image';

type Props = {
    slug: string
    image: string
    name: string
}

const CartItemImg = ({ slug, image, name }: Props) => {
    return (
        <div className='relative w-24 h-24'>
            <DelayedLink
                href={`/tienda/${slug}`}
                onBeforeNavigate={() => scrollToRef('scroll-y-Body', 0)}
            >
                <Image
                    src={image}
                    alt={name}
                    fill
                    className='object-cover rounded-xs shadow shadow-black/20'
                />
            </DelayedLink>
        </div>
    )
}

export default CartItemImg;
