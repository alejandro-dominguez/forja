import HomeCarouselClient from './HomeCarouselClient';

export interface CarouselSlide {
    id: number
    image: string
    title: string
    href: string
}

const slides: CarouselSlide[] = [
    {
        id: 0,
        image: 'https://i.ibb.co/jkBmPpBz/clases-boxeo-galeria-5.png',
        title: 'Boxeo, Funcional y Más',
        href: '/actividades',
    },
    {
        id: 1,
        image: 'https://i.ibb.co/Z1GkFHG3/0-marcas-de-boxeo-thumb-1300x725.png',
        title: 'Visita Nuestra Tienda',
        href: '/tienda',
    },
    {
        id: 2,
        image: 'https://i.ibb.co/yFQb94QJ/PERSONAL-TRAINER-SERVICIO-GIMNASIO-DUIN-CLUB-jpg.png',
        title: ' ',
        href: ' ',
    },
]

const HomeCarouselServer = () => {
    return <HomeCarouselClient slides={slides} />
}

export default HomeCarouselServer;
