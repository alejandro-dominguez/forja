import Image from 'next/image';
import { Benefit } from '../benefits.data';
import Link from 'next/link';

type Props = {
    benefit: Benefit
}

const BenefitCard = ({ benefit }: Props) => {
    const { image, title, href } = benefit

    return (
        <article
            className='bg-darker shadow shadow-darker/50 text-white
            flex flex-col border-4 border-darker rounded h-full'
        >
            <Link
                href={href}
                referrerPolicy='no-referrer'
                rel='noopener'
                target='_blank'
                className='relative h-68 md:h-82 w-full'>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className='object-cover'
                />
            </Link>
        </article>
    )
}

export default BenefitCard;
