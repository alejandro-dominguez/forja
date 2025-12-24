'use client';

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
    const [ openItems, setOpenItems ] = useState<number[]>([])

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
            <h2 className='mb-5 text-center text-3xl font-extrabold tracking-tight'>
                Preguntas Frecuentes
            </h2>
            <div className='bg-darker/95 backdrop-blur rounded text-white'>
                {faqs.map((faq, index) => {
                    const isOpen = openItems.includes(index);

                    return (
                    <div key={index}>
                        <button
                            onClick={() => toggleItem(index)}
                            className='flex w-full items-center justify-between transition py-[.675rem]
                            text-[1.05rem] font-semibold hover:bg-dark/85 tracking-wide px-5'
                        >
                            {faq.question}
                            <span
                                className={`ml-4 text-2xl transition
                                    ${
                                        isOpen ? 'rotate-45' : 'rotate-0'
                                    }`
                                }
                            >
                                +
                            </span>
                        </button>

                        {/* CONTENIDO */}
                        <div
                        className={`grid overflow-hidden px-6 transition-all
                            duration-300 ease-in-out
                            ${
                                isOpen ? 'grid-rows-[1fr] pb-5 opacity-100'
                                : 'grid-rows-[0fr] opacity-0'
                            }`
                        }
                        >
                        <div className='overflow-hidden text-[.9rem] tracking-wide pt-2'>
                            {faq.answer}
                        </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Faqs;
