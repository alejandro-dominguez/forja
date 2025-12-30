import Link from 'next/link';

const BenefitsOl = () => {
    return (
        <ol className='mt-3 flex flex-col gap-1'>
            <div className='flex gap-1'>
                <strong>
                    1.
                </strong>
                <div className='flex gap-1'>
                    <span>
                        Inicia sesión en la app
                    </span>
                    <Link
                        href='https://play.google.com/store/apps/details?id=deportnet.os.webview&hl=es_AR'    
                        referrerPolicy='no-referrer'
                        rel='noopener'
                        target='_blank'
                        className='text-light font-bold'
                    >
                        Deportnet
                    </Link>
                    .
                </div>
            </div>
            <p className='flex gap-1'>
                <strong>
                    2. 
                </strong>
                Dirígete al menú y selecciona la opción "Reserva de turnos".
            </p>
            <p className='flex gap-1'>
                <strong>
                    3. 
                </strong>
                Despaza hasta la parte inferior, donde encontrarás el recuadro de 
                "Servicios/Membresías vigentes".
            </p>
            <p className='flex gap-1'>
                <strong>
                    4. 
                </strong>
                Mostrá el recuadro en el local adherido para confirmar que sos socio/a vigente.
            </p>
        </ol>
    )
}

export default BenefitsOl;
