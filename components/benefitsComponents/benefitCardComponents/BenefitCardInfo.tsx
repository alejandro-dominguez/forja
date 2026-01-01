import Image from 'next/image';

type Props = {
    title: string
    logo: string
    discount: string
}

const BenefitCardInfo = ({ title, logo, discount }: Props) => {
    return (
        <div className='absolute inset-0 z-20 p-4 flex flex-col gap-3 items-center text-center'>
            <h3
                className='text-xl font-dela-gothic-one tracking-wide uppercase
                leading-6 text-shadow-sm text-shadow-sky-950/30'
            >
                {title}
            </h3>
            <div className='relative h-24 w-52'>
                <Image
                    src={logo}
                    alt={`${title} logo`}
                    fill
                    className='object-contain'
                />
            </div>
            <p className='text-[.9rem] font-medium text-white whitespace-pre-line leading-snug text-shadow-sm text-shadow-sky-950/30'>
                {discount}
            </p>
        </div>
    )
}

export default BenefitCardInfo;
