'use client';

import { BiSolidCaretRightCircle } from 'react-icons/bi';

type Props = {
    current: number
    pages: number
    goNext: () => void
}

const PaginationNext = ({ current, goNext, pages }: Props) => {
    return (
        <button
            onClick={goNext}
            className={`${current === pages ? 'opacity-40 cursor-auto' : 'cursor-pointer'}`}
        >
            <BiSolidCaretRightCircle size={22.5} className='text-darker' />
        </button>
    )
}

export default PaginationNext;
