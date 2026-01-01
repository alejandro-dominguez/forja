const BenefitPromos = () => {
    return (
        <div
            className='grid place-items-center text-center font-dela-gothic-one
            relative pb-9 rounded shadow shadow-darker/50 mt-5'
            style={{ backgroundImage: `url('https://i.ibb.co/FLbXtvcV/fondo-contacto.png')` }}
        >
            <div className='absolute inset-0 bg-darker/50 rounded' />
            <h3
                className='text-lighter mt-6 font-dela-gothic-one
                text-2xl sm:text3xl uppercase z-10'
            >
                PROMOCIONES
            </h3>
            <div
                className='px-4 sm:px-8 pt-3 pb-4 grid place-items-center gap-1
                border-2 border-light rounded mt-4 z-10 text-lg'
            >
                <span className='text-lighter'>
                    10%
                </span>
                <p className='text-white leading-[1.6rem]'>
                    ESTUDIANTES<br />UNIVERSITARIOS
                </p>
                <span className='text-lighter mt-1'>
                    15%
                </span>
                <p className='text-white leading-[1.6rem]'>
                    GRUPOS<br />FAMILIARES
                </p>
                <span className='text-lighter mt-1'>
                    25%
                </span>
                <p className='text-white leading-[1.6rem]'>
                    ABONANDO 6 MESES<br />DE PASE LIBRE
                </p>
            </div>
        </div>
    )
}

export default BenefitPromos;
