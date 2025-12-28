'use client';

import SedeRoca from './subsidiarTabsComponents/SedeRoca';
import SedeCatamarca from './subsidiarTabsComponents/SedeCatamarca';
import SedeAvellaneda from './subsidiarTabsComponents/SedeAvellaneda';
import SubsidiaryTabsControls from './subsidiarTabsComponents/SubsidiaryTabsControls';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';

export type Tab = {
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
    { id: 1, label: 'Sede Roca', content: <SedeRoca /> },
    { id: 2, label: 'Sede Catamarca', content: <SedeCatamarca /> },
    { id: 3, label: 'Sede Avellaneda', content: <SedeAvellaneda /> },
]

const SubsidiaryTabs = () => {
    const [ activeTab, setActiveTab ] = useState<Tab>(tabs[0])

    return (
        <section className='mt-8 min-h-svh'>
            <div
                className='relative rounded overflow-hidden shadow
                shadow-darker/50 transition-all ease-out duration-200'
                style={{
                    backgroundImage: `url(https://i.ibb.co/FLbXtvcV/fondo-contacto.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <SubsidiaryTabsControls
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <div className='bg-darker/75 px-4 md:px-8 pt-24 pb-6 md:pb-8'>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab.id}
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

export default SubsidiaryTabs;
