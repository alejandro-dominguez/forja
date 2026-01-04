'use client';

import scrollTop from '@/utils/scrollTop';
import { BiSolidCaretRightCircle, BiSolidCaretLeftCircle } from 'react-icons/bi';

type Props = {
    total: number
    perPage: number
    current: number
    onChange: (p: number) => void
}

const Pagination = ({ total, perPage, current, onChange }: Props) => {
    const pages = Math.ceil(total / perPage)

    const goPrev = () => {
        if (current === 1) return
        onChange(current - 1)
        scrollTop()
    }
    const goNext = () => {
        if (current === pages) return
        onChange(current + 1)
        scrollTop()
    }

    return (
        <div className='flex justify-center items-center gap-4 mt-4 text-xl font-medium'>
            <button
                onClick={goPrev}
                className={`${current === 1 ? 'opacity-40 cursor-auto' : 'cursor-pointer'}`}
            >
                <BiSolidCaretLeftCircle size={22.5} className='text-darker' />
            </button>
            {Array.from({ length: pages }).map((_, i) => (
                <button
                key={i}
                onClick={() => {
                    onChange(i + 1)
                    scrollTop()
                }}
                className={
                    current === i + 1
                    ? 'font-bold underline underline-offset-2 text-dark'
                    : 'cursor-pointer text-darker'
                }
                >
                {i + 1}
                </button>
            ))}
            <button
                onClick={goNext}
                className={`${current === pages ? 'opacity-40 cursor-auto' : 'cursor-pointer'}`}
            >
                <BiSolidCaretRightCircle size={22.5} className='text-darker' />
            </button>
        </div>
    )
}

export default Pagination;
