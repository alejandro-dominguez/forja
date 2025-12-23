'use client';

import scrollTop from '@/utils/scrollTop';
import { BiSolidCaretUpCircle } from 'react-icons/bi';

const FooterThirdCol = () => {
    return (
        <div className='flex flex-col items-center gap-7'>
            <BiSolidCaretUpCircle
                size={32}
                className='block cursor-pointer text-white'
                onClick={scrollTop}
            />
            <small>
                <span>
                    &copy; 2025
                </span>
                <span>
                    Yamil Gaggiotti
                </span>
            </small>
        </div>
    )
}

export default FooterThirdCol;
