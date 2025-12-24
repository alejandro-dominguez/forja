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
        answer:
            'No tenés que reservar turno, te recomendamos venir 5 o 10 minutos antes de la clase.',
    },
    {
        question: '¿Qué tengo que llevar a la clase?',
        answer:
            'Traé una botella de agua, la podés cargar en nuestros dispenser.',
    },
    {
        question: '¿Tengo que llevar protecciones?',
        answer:
            'Nosotros te prestamos las protecciones hasta que adquieras unas propias.',
    },
    {
        question: '¿Cómo debo ir al gimnasio?',
        answer: 'Vení con ropa cómoda ¡y con muchas ganas de entrenar!',
    },
]

const Faqs = () => {
    const [openItems, setOpenItems] = useState<number[]>([])

    const toggleItem = (index: number) => {
        setOpenItems((prev) =>
            prev.includes(index) ?
                prev.filter((i) => i !== index)
            :
                [...prev, index]
        )
    }

    return (
        <section className='w-full pt-7 h-185'>
            <h2 className='mb-8 text-center text-3xl font-extrabold tracking-tight'>
                Preguntas Frecuentes
            </h2>

            <div className='bg-darker/95 backdrop-blur rounded text-white'>
                {faqs.map((faq, index) => {
                    const isOpen = openItems.includes(index)

                    return (
                        <div key={index}>
                            <FaqsQuestion
                                question={faq.question}
                                isOpen={isOpen}
                                onClick={() => toggleItem(index)}
                            />
                            <FaqsAnswer
                                answer={faq.answer}
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
