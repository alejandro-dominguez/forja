import NavLogo from '@/components/layoutComponents/navComponents/NavLogo';
import NavUl from '@/components/layoutComponents/navComponents/NavUl';

const Navbar = () => {
    return (
        <header
            className='sticky top-0 z-50 flex h-14 justify-center text-[.95rem]
            bg-main/10 backdrop-blur-sm'
        >
            <nav className='flex w-full max-w-7xl items-center justify-between'>
                <NavLogo />
                <NavUl />
            </nav>
        </header>
    )
}

export default Navbar;
