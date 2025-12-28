'use client';

import scrollToRef from '@/utils/scrollToRef';
import { BiSolidCaretUpCircle } from 'react-icons/bi';

const FooterThirdCol = () => {
    return (
        <div className='flex flex-col items-center gap-14'>
            <BiSolidCaretUpCircle
                size={30}
                className='block cursor-pointer text-white transition-colors hover:text-lighter'
                onClick={() => scrollToRef('scroll-y-Body', 0)}
            />
            <small className='text-center hidden sm:block'>
                &copy; 2025 Pixel Coffee
            </small>
        </div>
    )
}

export default FooterThirdCol;
