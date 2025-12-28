'use client';

import GymEventContent from './GymEventContent';
import DelayedLink from '@/components/customComponents/DelayedLink';
import scrollToRef from '@/utils/scrollToRef';
import type { GymEvent } from '../GymEvents';

const GymEventCard = (event: GymEvent) => {
    const { id, title, image } = event
    
    return (
        <div
            key={id}
            className='bg-darker rounded border-4 border-darker shadow
            shadow-darker/50 overflow-hidden text-left'
        >
            <DelayedLink href='/eventos' onBeforeNavigate={() => scrollToRef('scroll-y-Body', 0)}>
                <GymEventContent {...event} />
            </DelayedLink>
        </div>
    )
}

export default GymEventCard;
