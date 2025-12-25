import Image from 'next/image';

type Props = {
    image: string
    title: string
}

const GymEventImage = ({ image, title }: Props) => {
    return (
        <div className='h-64 w-full overflow-hidden'>
            <img
                src={image}
                alt={title}
                className='h-full w-full object-cover'
            />
        </div>
    )
}

export default GymEventImage;
