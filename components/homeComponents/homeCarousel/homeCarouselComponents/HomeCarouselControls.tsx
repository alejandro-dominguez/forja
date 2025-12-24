'use client';

import { BiSolidCaretRightCircle, BiSolidCaretLeftCircle } from 'react-icons/bi';

interface Props {
    onPrev: () => void
    onNext: () => void
    isFirst: boolean
    isLast: boolean
}

const HomeCarouselControls = ({
    onPrev,
    onNext,
    isFirst,
    isLast
}: Props) => {
    return (
            <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-7'>
                <button
                    onClick={onPrev}
                    disabled={isFirst}
                className={`
                    grid place-items-center p-[.2rem] rounded-full transition-colors
                    ${
                        isFirst ? 'bg-light/30 pointer-events-none'
                        : 'bg-light/70 hover:bg-lighter cursor-pointer'
                    }
                `}
                >
                    <BiSolidCaretLeftCircle size={28} className='text-white/75' />
                </button>

                <button
                    onClick={onNext}
                    disabled={isLast}
                className={`
                    grid place-items-center p-[.2rem] rounded-full transition-colors
                    ${
                        isLast
                            ? 'bg-light/30 pointer-events-none'
                            : 'bg-light/70 hover:bg-lighter cursor-pointer'
                    }
                `}
                >
                    <BiSolidCaretRightCircle size={28} className='text-white/75' />
                </button>
            </div>
    )
}

export default HomeCarouselControls;
