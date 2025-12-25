import type { GymEvent } from '../GymEvents';

const GymEventContent = (event: GymEvent) => {
    const { title, date, description, type } = event

    return (
        <div className='p-4'>
            <span className='text-lighter text-sm mb-1'>
                {type === 'upcoming' ? 'evento próximo' : 'último evento'}
            </span>
            <h3 className='font-dela-gothic-one text-2xl text-slate-100 my-1'>
                {title}
            </h3>
            <p className='text-slate-200 leading-tight my-2'>
                {description}
            </p>
            <p className='text-slate-300 text-sm'>
                {date}
            </p>
        </div>
    )
}

export default GymEventContent;
