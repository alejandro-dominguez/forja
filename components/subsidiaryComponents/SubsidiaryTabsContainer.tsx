'use client';

import SedeRoca from './subsidiarTabsComponents/SedeRoca';
import SedeCatamarca from './subsidiarTabsComponents/SedeCatamarca';
import SedeAvellaneda from './subsidiarTabsComponents/SedeAvellaneda';
import SubsidiaryTabsControls from './subsidiarTabsComponents/SubsidiaryTabsControls';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';

export type Tab = {
    label: string
    content: React.ReactNode
}

const contentVariants: Variants = {
    initial: { opacity: 0, x: 12 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -12 },
}

const tabs: Tab[] = [
    { label: 'Sede Roca', content: <SedeRoca /> },
    { label: 'Sede Catamarca', content: <SedeCatamarca /> },
    { label: 'Sede Avellaneda', content: <SedeAvellaneda /> },
]

const SubsidiaryTabsContainer = () => {
    const [ activeTab, setActiveTab ] = useState<Tab>(tabs[0])

    return (
        <section className='mt-8 sm:min-h-svh'>
            <div
                className='relative rounded overflow-hidden shadow
                shadow-darker/50 transition-all ease-out duration-200'
                style={{ backgroundImage: `url(https://i.ibb.co/FLbXtvcV/fondo-contacto.png)` }}
            >
                <SubsidiaryTabsControls
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <div className='bg-dark/50 px-4 md:px-8 pt-50 sm:pt-21 pb-6 md:pb-8'>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab.label}
                            variants={contentVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            transition={{ duration: 0.18 }}
                        >
                            {activeTab.content}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default SubsidiaryTabsContainer;
