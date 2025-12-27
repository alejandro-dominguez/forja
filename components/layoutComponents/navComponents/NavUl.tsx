'use client';

import NavMenuBtn from './NavMenuBtn';
import scrollToRef from '@/utils/scrollToRef';
import DelayedLink from '@/components/customComponents/DelayedLink';
import { navItems } from '@/constants/navItems';

interface Props {
    isVisible: boolean
    onToggle: (newValue: boolean) => void
}

const NavUl = ({ isVisible, onToggle }: Props) => {
    return (
        <div className='md:hidden'>
            <NavMenuBtn isVisible={isVisible} onToggle={onToggle} />
            <div
                className={`fixed inset-0 z-40 transition-transform duration-250
                ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className='pt-14'>
                    <ul
                        className='bg-[#b5c2ed] grid grid-cols-2 place-items-center
                        gap-3 -mt-14 pt-16 pb-4 px-10 shadow-md shadow-darker/20'
                    >
                        {navItems.map(({ label, href }) => (
                            <li
                                key={href}
                                className='uppercase font-semibold text-slate-700'
                            >
                                <DelayedLink
                                    href={href}
                                    className='mt-2'
                                    onBeforeNavigate={() => {
                                        scrollToRef('scrollYBody', 0)
                                        onToggle(false)
                                    }}
                                >
                                    {label}
                                </DelayedLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavUl;
