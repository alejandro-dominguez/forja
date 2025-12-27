import SubsidiaryTabDays from './SubsidiaryTabDays';

const SedeCatamarca = () => {
    return (
        <div className='text-white'>
            <h3 className='text-3xl font-dela-gothic-one tracking-wide mb-5 uppercase'>
                SEDE CATAMARCA
            </h3>
            <div className='border-2 rounded-sm border-white/50 uppercase relative mt-12'>
                {[
                    ['08:00', 'BOXEO', 'BOXEO'],
                    ['09:00', 'KICKBOXING', ''],
                    ['12:00', 'BOXEO', 'BOXEO'],
                    ['13:00', 'MMA', 'KICKBOXING'],
                    ['17:00', '', 'BOXEO'],
                    ['18:00', '', 'TAEKWONDO'],
                    ['19:00', 'BOXEO', 'KICKBOXING'],
                    ['20:00', 'KICKBOXING', 'BOXEO'],
                    ['21:00', 'MMA', 'MUAY THAI'],
                ].map(([ hour, col1, col2 ]) => (
                    <div
                        key={hour}
                        className='grid grid-cols-[60px_1fr_1fr] border-b-2
                        border-white/50 text-center text-[.9rem] sm:text-[.95rem]'
                    >
                        <div className='py-2 border-r-2 border-white/50'>
                            {hour}
                        </div>
                        <div className='py-2 border-r-2 border-white/50'>
                            {col1}
                        </div>
                        <div className='py-2'>
                            {col2}
                        </div>
                    </div>
                ))}
                <SubsidiaryTabDays />
            </div>
        </div>
    )
}

export default SedeCatamarca;
