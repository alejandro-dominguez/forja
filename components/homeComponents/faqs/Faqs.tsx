'use client';

import FaqsQuestion from './faqsComponents/FaqsQuestion';
import FaqsAnswer from './faqsComponents/FaqsAnswer';
import { useState } from 'react';

type Faq = {
    question: string
    answer: string
}

const faqs: Faq[] = [
    {
        question: '¿La primera clase es gratuita?',
        answer: 'Sí, la primer clase es totalmente gratuita.',
    },
    {
        question: '¿Puedo comenzar siendo principiante?',
        answer: 'No necesitás experiencia previa para empezar.',
    },
    {
        question: '¿Tengo que reservar turno?',
        answer: 'No tenés que reservar turno, te recomendamos venir 5 o 10 minutos antes de la clase.',
    },
    {
        question: '¿Qué tengo que llevar a la clase?',
        answer: 'Traé una botella de agua, la podés cargar en nuestros dispenser.',
    },
    {
        question: '¿Tengo que llevar protecciones?',
        answer: 'Nosotros te prestamos las protecciones hasta que adquieras unas propias.',
    },
    {
        question: '¿Cómo debo ir al gimnasio?',
        answer: 'Vení con ropa cómoda ¡y con muchas ganas de entrenar!',
    },
]

const Faqs = () => {
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
        <section className='w-full mt-12 h-255 sm:h-185'>
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

export default Faqs;
