'use client';

import FaqsQuestion from './faqsComponents/FaqsQuestion';
import FaqsAnswer from './faqsComponents/FaqsAnswer';
import { useState } from 'react';
import { faqs } from './faqs.data';

const FaqsContainer = () => {
    const [ openItems, setOpenItems ] = useState<number[]>([])

    const toggleItem = (index: number) => {
        setOpenItems((prev) =>
            prev.includes(index) ?
                prev.filter((i) => i !== index)
            :
                [ ...prev, index ]
        )
    }

    return (
        <section className='w-full mt-12 h-auto sm:h-185 mb-40 sm:mb-0'>
            <h2
                className='mb-[1.975rem] text-center text-3xl text-dark font-extrabold
                tracking-tight leading-[2.05rem]'
            >
                Preguntas Frecuentes
            </h2>
            <div className='bg-darker rounded text-white shadow shadow-darker/50 pt-2'>
                {faqs.map(({ question, answer }, index) => {
                    const isOpen = openItems.includes(index)

                    return (
                        <div key={index}>
                            <FaqsQuestion
                                question={question}
                                isOpen={isOpen}
                                onClick={() => toggleItem(index)}
                            />
                            <FaqsAnswer
                                answer={answer}
                                isOpen={isOpen}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default FaqsContainer;
