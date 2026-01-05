'use client';

import { BiSolidCaretLeftCircle } from 'react-icons/bi';

type Props = {
    current: number
    goPrev: () => void
}

const PaginationPrev = ({ current, goPrev }: Props) => {
    return (
        <button
            onClick={goPrev}
            className={`${current === 1 ? 'opacity-40 cursor-auto' : 'cursor-pointer'}`}
        >
            <BiSolidCaretLeftCircle size={22.5} className='text-darker' />
        </button>
    )
}

export default PaginationPrev;
