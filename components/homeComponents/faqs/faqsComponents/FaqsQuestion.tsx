'use client';

import { FaPlus } from 'react-icons/fa';

type Props = {
    question: string
    isOpen: boolean
    onClick: () => void
}

const FaqsQuestion = ({ question, isOpen, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className='flex w-full items-center justify-between transition py-[.675rem]
            text-[1.05rem] font-semibold hover:bg-dark/85 tracking-wide px-5'
        >
            {question}

            <div className='p-1 cursor-pointer'>
                <FaPlus
                    className={`text-lg transition-transform ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                />
            </div>
        </button>
    )
}

export default FaqsQuestion;
