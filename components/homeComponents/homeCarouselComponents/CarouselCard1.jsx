import { useState, useEffect } from 'react';
import scrollToRef from "../../utils/scrollToRef";

const CarouselCard1 = ({ setTabIndex, tabSection }) => {
    const [activeClass, setActiveClass] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setActiveClass(true)
        }, 0);
    }, [])

    const handleClick = () => {
        setTabIndex(1)
        scrollToRef(tabSection.current, 68)
    }

    return (
        <div className='grid grid-cols-2 place-items-center relative w-screen px-16'>
            <div className={activeClass ? `flex flex-col items-start gap-4 pt-20 transition-all ease-out duration-[800ms] opacity-100`
            : `flex flex-col items-start gap-4 pt-20 -translate-x-[500px] transition-all ease-out duration-[800ms] opacity-0`}>
                <h3>Lorem ipsum dolor</h3>
                <p className='drop-shadow-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis impedit itaque 
                    eaque quia, expedita ipsam. Exercitationem cupiditate quia pariatur adipisci aut 
                    similique repellendus optio cumque, nobis molestias repellat praesentium assumenda 
                    iste dicta vero at quae consequuntur iusto accusantium! Consequatur quasi inventore 
                    expedita illo quaerat nobis, laudantium consectetur a ratione at?
                </p>
                <button type='button' className='px-5 py-2 mt-2 bg-[#009bb4] rounded-full font-RobotoSlab
                font-semibold uppercase tracking-wider transition-colors text-sm hover:bg-white hover:text-neutral-900
                focus:bg-white focus:text-neutral-900 duration-200'
                onClick={() => handleClick()}>
                    Conoce más
                </button>
            </div>
            <div className="flex flex-col">
                <div className={activeClass ? `absolute top-6 w-[40rem] -translate-x-[300px] transition-all ease-out
                opacity-100 duration-[800ms]`
                : `absolute top-6 translate-x-[300px] w-[40rem] transition-all ease-out duration-[800ms] opacity-0`}>
                    <img src="https://i.ibb.co/9q0GKDr/CFORCE-520-L-True-Timber-Camo-Left-45-168.png"
                    alt="ZFOCE1000 sport" className='w-full h-full block drop-shadow-md' />
                </div>
            </div>
        </div>
    )
}

export default CarouselCard1;
