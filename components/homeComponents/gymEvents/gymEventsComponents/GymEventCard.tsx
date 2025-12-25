import Link from 'next/link';
import GymEventContent from './GymEventContent';
import GymEventImage from './GymEventImage';
import type { GymEvent } from '../GymEvents';

const GymEventCard = (event: GymEvent) => {
    const { id, title, image } = event
    
    return (
        <div
            key={id}
            className='bg-darker rounded border-4 border-darker shadow
            shadow-darker/50 overflow-hidden text-left'
        >
            <Link href='/eventos'>
                <GymEventImage image={image} title={title} />
                <GymEventContent {...event} />
            </Link>
        </div>
    )
}

export default GymEventCard;
