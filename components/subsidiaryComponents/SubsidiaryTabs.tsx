'use client';

import SedeRoca from './subsidiarTabsComponents/SedeRoca';
import SedeCatamarca from './subsidiarTabsComponents/SedeCatamarca';
import SedeAvellaneda from './subsidiarTabsComponents/SedeAvellaneda';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';

type Tab = {
    id: number
    label: string
    content: React.ReactNode
}

const contentVariants: Variants = {
    initial: { opacity: 0, x: 12 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -12 },
}

const tabs: Tab[] = [
    {
        id: 1,
        label: 'Sede Roca',
        content: <SedeRoca />,
    },
    {
        id: 2,
        label: 'Sede Catamarca',
        content: <SedeCatamarca />,
    },
    {
        id: 3,
        label: 'Sede Avellaneda',
        content: <SedeAvellaneda />,
    },
]

const SubsidiaryTabs = () => {
    const [ activeTab, setActiveTab ] = useState<Tab>(tabs[0])

    return (
        <section className='mt-6 min-h-svh'>
            <div
                className='flex flex-col items-center sm:flex-row
                sm:justify-center gap-3 sm:gap-8 mb-4 sm:mb-7'
            >
                {tabs.map(tab => {
                    const isActive = tab.id === activeTab.id

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                relative px-5 py-2 font-semibold tracking-wide rounded-md
                                transition text-white cursor-pointer w-52
                                shadow shadow-darker/50 ${isActive ? 'bg-main' : 'bg-darker'}
                            `}
                        >
                            {tab.label}
                            {isActive && (
                                <motion.span
                                    layoutId='tab-indicator'
                                    className='absolute inset-0 rounded bg-main -z-10'
                                />
                            )}
                        </button>
                    )
                })}
            </div>
            <div
                className='relative rounded overflow-hidden shadow shadow-darker/50'
                style={{
                    backgroundImage: `url(https://i.ibb.co/FLbXtvcV/fondo-contacto.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='bg-darker/75 px-4 md:px-8 pt-4 md:pt-5 pb-6 md:pb-8'>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab.id}
                            variants={contentVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            transition={{ duration: 0.22 }}
                        >
                            {activeTab.content}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default SubsidiaryTabs;
