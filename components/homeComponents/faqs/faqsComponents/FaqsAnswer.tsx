'use client';

type Props = {
    answer: string
    isOpen: boolean
}

const FaqsAnswer = ({ answer, isOpen }: Props) => {
    return (
        <div
            className={`grid overflow-hidden px-6 transition-all duration-300 ease-in-out
            ${isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
            <div className='overflow-hidden text-[.92rem] text-start tracking-wide pt-2'>
                {answer}
            </div>
        </div>
    )
}

export default FaqsAnswer;
