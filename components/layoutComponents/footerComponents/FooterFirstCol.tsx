'use client';

import DelayedLink from '@/components/customComponents/DelayedLink';
import scrollToRef from '@/utils/scrollToRef';
import { FaTruck } from 'react-icons/fa6';

const FooterFirstCol = () => {
    return (
        <div className='flex flex-col items-start gap-2 mr-11 md:mr-0'>
            <div className='flex flex-col gap-1'>
                <h3 className='font-bold text-[.95rem]'>
                    Zona de Envíos
                </h3>
                <div className='flex gap-2 items-center'>
                    <FaTruck className='block' size={18} />
                    <span>
                        Envíos a todo el país
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-1 font-extralight text-[.845rem]'>    
                <DelayedLink
                    href='/sucursales'
                    onBeforeNavigate={() => scrollToRef('scroll-y-Body', 0)}
                >
                    Sedes y Horarios
                </DelayedLink>
                <DelayedLink
                    href='/terminos&condiciones'
                    onBeforeNavigate={() => scrollToRef('scroll-y-Body', 0)}
                >
                    Términos y condiciones
                </DelayedLink>
                <DelayedLink
                    href='/devoluciones'
                    onBeforeNavigate={() => scrollToRef('scroll-y-Body', 0)}
                >
                    Devoluciones
                </DelayedLink>
            </div>
        </div>
    )
}

export default FooterFirstCol;
