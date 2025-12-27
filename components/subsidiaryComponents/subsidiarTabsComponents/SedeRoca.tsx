import SubsidiaryTabDays from './SubsidiaryTabDays';

const SedeRoca = () => {
    return (
        <div className='text-white'>
            <h3 className='text-3xl font-dela-gothic-one tracking-wide mb-5 uppercase'>
                SEDE ROCA
            </h3>
            <div className='border-2 rounded-sm border-white/50 uppercase relative mt-12'>
                {[
                    ['08:00', 'BOXEO', 'KICKBOXING'],
                    ['09:00', '', ''],
                    ['10:00', 'MMA', ''],
                    ['11:00', '', ''],
                    ['12:00', 'KICKBOXING', 'BOXEO'],
                    ['16:00', 'MMA', 'MMA'],
                    ['17:00', '', ''],
                    ['18:00', '', 'BOXEO'],
                    ['19:00', 'KICKBOXING', 'BRAZILIAN JIU-JITSU | KICKBOXING FEMENINO'],
                    ['20:00', 'TAEKWONDO | MUAY THAI', 'KICKBOXING'],
                    ['21:00', 'BOXEO', ''],
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
            <div>
                <h4
                    className='text-2xl leading-7 sm:leading-normal sm:text-3xl uppercase
                    font-dela-gothic-one tracking-wide mb-5 text-lighter mt-4'
                >
                    Sábados
                </h4>
                <div className='text-[.9rem] sm:text-[.95rem] -mt-3 tracking-wide pl-0.5'>
                    <span>
                        9:00 SPARRING MMA (competidores)
                    </span>
                    <span className='mt-1'>
                        11:00 SPARRING (general)
                    </span>  
                </div>
            </div>
            <div>
                <h4
                    className='text-2xl leading-7 sm:leading-normal sm:text-3xl uppercase
                    font-dela-gothic-one tracking-wide mb-5 text-lighter mt-2'
                >
                    Sala de musculación
                </h4>
                <div className='text-[.9rem] sm:text-[.95rem] -mt-3 tracking-wide pl-0.5'>
                    <span className='flex flex-col'>
                        <span>
                            L MI V: 9:00 a 12:00 y 16:00 a 21:00
                        </span>
                        <span className='my-1'>
                            M J: 9:00 a 12:00 y 16:00 a 20:00
                        </span>
                        <span>
                            S: 9:00 a 12:00
                        </span>
                    </span>  
                </div>
            </div>
        </div>
    )
}

export default SedeRoca;
