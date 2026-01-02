'use client'

import GymEventContent from './GymEventContent'
import DelayedLink from '@/components/customComponents/DelayedLink'
import scrollToRef from '@/utils/scrollToRef'
import type { GymEvent } from '../gymEvents.data'

const GymEventCard = (event: GymEvent) => {
    return (
        <article
            className='bg-darker rounded border-4 border-darker
            shadow shadow-darker/50 overflow-hidden text-left'
        >
            <DelayedLink
                href={`/eventos/${event.id}`}
                onBeforeNavigate={() => scrollToRef('scroll-y-Body', 0)}
            >
                <GymEventContent {...event} />
            </DelayedLink>
        </article>
    )
}

export default GymEventCard
