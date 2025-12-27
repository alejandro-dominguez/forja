import SubsidiaryTabDays from './SubsidiaryTabDays';

const SedeAvellaneda = () => {
    return (
        <div className='text-white'>
            <h3 className='text-3xl font-dela-gothic-one tracking-wide mb-5'>
                Sede Avellaneda
            </h3>
            <div className='border-2 rounded-sm border-white/50 uppercase relative mt-12'>
                {[
                    ['17:00', 'MUAY THAI', ''],
                    ['18:00', 'KICKBOXING', 'BOXEO'],
                    ['19:00', 'BOXEO', 'KICKBOXING'],
                    ['20:00', 'BRAZILIAN JIU-JITSU', ''],
                ].map(([ hour, col1, col2 ]) => (
                    <div
                        key={hour}
                        className='grid grid-cols-[60px_1fr_1fr] border-b-2
                        border-white/50 text-center text-[.9rem] sm:text-[.95rem]'
                    >
                        <div className='py-2 border-r-2 border-white/50'>
                            {hour}
                        </div>
                        <div className='py-2 border-r-2 px-1 border-white/50'>
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

export default SedeAvellaneda;
