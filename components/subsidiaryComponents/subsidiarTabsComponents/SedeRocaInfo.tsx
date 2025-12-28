const SedeRocaInfo = () => {
    return (
        <>
        <div>
            <h4
                className='text-2xl leading-7 sm:leading-normal sm:text-3xl uppercase
                font-dela-gothic-one tracking-wide mb-5 text-lighter mt-4 md:mt-2'
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
        </>
    )
}

export default SedeRocaInfo;
