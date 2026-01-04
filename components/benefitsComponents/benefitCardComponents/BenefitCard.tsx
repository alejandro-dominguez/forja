import Image from 'next/image';
import BenefitCardInfo from './BenefitCardInfo';
import BenefitCardBtn from './BenefitCardBtn';
import { Benefit } from '../benefits.data';

type Props = {
    benefit: Benefit
}

const BenefitCard = ({ benefit }: Props) => {
    const { image, title, href, label, logo, discount } = benefit

    return (
        <article
            className='bg-darker shadow shadow-darker/50 text-white
            flex flex-col border-4 border-darker rounded'
        >
            <div className='relative h-70 w-full'>
                <div className='absolute inset-0 bg-black/50 z-10' />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className='object-cover'
                />
                <BenefitCardInfo logo={logo} title={title} discount={discount} />
            </div>
            <BenefitCardBtn href={href} label={label} />
        </article>
    )
}

export default BenefitCard;
