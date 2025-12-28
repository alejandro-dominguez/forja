'use client';

import type { Tab } from '../SubsidiaryTabsContainer';

type TabsControlsProps = {
    tabs: Tab[]
    activeTab: Tab
    setActiveTab: (tab: Tab) => void
}

const SubsidiaryTabsControls = ({
    tabs,
    activeTab,
    setActiveTab,
}: TabsControlsProps) => {
    return (
        <div
            className='flex flex-col items-center sm:flex-row sm:justify-center
            gap-4 sm:gap-5 md:gap-8 absolute top-5 sm:top-6 left-1/2 -translate-x-1/2'
        >
            {tabs.map(tab => {
                const isActive = tab.id === activeTab.id

                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab)}
                        className={`
                            relative px-5 py-2 font-mediums border-2 rounded-md
                            w-46 lg:w-52 transition-all duration-200 cursor-pointer
                            shadow shadow-dark/40 ease-out uppercase
                            ${
                                isActive
                                    ? 'text-white border-white/90 bg-white/15'
                                    : 'text-white border-white/50 bg-transparent hover:bg-white/5'
                            }
                        `}
                    >
                        {tab.label}
                    </button>
                )
            })}
        </div>
    )
}

export default SubsidiaryTabsControls;
