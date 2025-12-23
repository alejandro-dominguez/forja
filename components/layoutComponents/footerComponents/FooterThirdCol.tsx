'use client';

import scrollTop from '@/utils/scrollTop';
import { BiSolidCaretUpCircle } from 'react-icons/bi';

const FooterThirdCol = () => {
    return (
        <div className='flex flex-col items-center gap-14'>
            <BiSolidCaretUpCircle
                size={30}
                className='block cursor-pointer text-white'
                onClick={scrollTop}
            />
            <small>
                &copy; 2025 Yamil Gaggiotti
            </small>
        </div>
    )
}

export default FooterThirdCol;
