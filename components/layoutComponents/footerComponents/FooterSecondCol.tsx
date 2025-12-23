import Link from 'next/link';
import { FaTruck } from 'react-icons/fa6';

const FooterSecondCol = () => {
    return (
        <div className='flex flex-col items-start gap-3'>
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
                <Link href='/terminos&condiciones'>
                    Términos y condiciones
                </Link>
                <Link href='/devoluciones'>
                    Devoluciones
                </Link>
            </div>
        </div>
    )
}

export default FooterSecondCol;
