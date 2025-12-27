interface imgUrl {
    id: number
    image: string
}

const bgUrl: imgUrl[] = [
    {
        id: 0,
        image: 'https://i.ibb.co/RTvJ4VgN/kick-boxing-2.png',
    },
]

const HomeParallax = () => {
    const { image } = bgUrl[0]
    return (
        <div
            className={`relative grid place-items-center min-h-120 max-w-400 mx-auto
            bg-cover bg-no-repeat bg-center bg-fixed before:content-['']
            before:absolute before:inset-0 before:bg-black/90 before:opacity-50`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <span
                className='font-dela-gothic-one tracking-widest uppercase z-10
                text-center font-bold px-3 text-4xl md:text-[3.5rem] text-white
                text-shadow-md text-shadow-sky-950/40 sm:px-5 leading-12 md:leading-normal'
            >
                Desafiá tus límites
            </span>
        </div>
    )
}

export default HomeParallax;
