import NavBar from './navComponents/NavBar';

const Header = () => {
    return (
        <header
            className='sticky top-0 z-50 flex h-14 justify-center text-[.9rem] text-slate-500
            tracking-[0.01em] bg-main/20 backdrop-blur-sm px-3 sm:px-5 md:px-16 lg:px-24'
        >
            <NavBar />
        </header>
    )
}

export default Header;
