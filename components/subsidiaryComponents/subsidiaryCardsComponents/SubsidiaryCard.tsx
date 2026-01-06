import type { Subsidiary } from '../subsidiries.data';
import SubsidiaryCardImg from './SubsidiaryCardImg';

const SubsidiaryCard = (subsidiary: Subsidiary) => {
    const { title, location, activities, image } = subsidiary

    return (
        <article
            className='group bg-darker rounded border-4 border-darker shadow
            shadow-darker/50 overflow-hidden text-left relative'
        >
            <SubsidiaryCardImg title={title} image={image} />
            <div className='absolute bottom-0 w-full text-sm'>
                <div className='px-3 text-white mb-2'>
                    <span
                        className='font-medium tracking-wide text-[.9rem]
                        text-shadow-sm text-shadow-sky-950/30'
                    >
                        {location}
                    </span>
                    <h3
                        className='font-dela-gothic-one text-3xl tracking-wide leading-[2.15rem]
                        text-shadow-sm text-shadow-sky-950/30 uppercase'
                    >
                        {title}
                    </h3>
                </div>
                <div className='px-3 py-2 bg-darker'>
                    <p className='text-white'>
                        <span className='text-lighter leading-normal mb-[.2rem]'>
                            Actividades disponibles:
                        </span>
                        {activities}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default SubsidiaryCard;
