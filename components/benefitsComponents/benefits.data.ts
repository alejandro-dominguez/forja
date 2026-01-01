export type Benefit = {
    title: string
    href: string
    image: string
    label: string
    logo: string
    discount: string
}

export const benefits: Benefit[] = [
    {
        title: 'Roma Pilates',
        label: 'Roma',
        href: 'https://www.instagram.com/roma.pilates',
        image: 'https://i.ibb.co/bRQCgJCX/Recurso-1.png',
        logo: '/partners/roma.svg',
        discount: '¿Socio de Forja?\nEntrená en Roma con 20% OFF\nen el abono mensual.',
    },
    {
        title: 'Lova Restaurant',
        label: 'Lova',
        href: 'https://www.instagram.com/lova_restaurant',
        image: 'https://i.ibb.co/LLL7kQJ/Recurso-8.png',
        logo: '/partners/lova.svg',
        discount: 'LUNES A VIERNES:\n5% al mediodía.\n10% a la noche.\nMARTES NOCHE:\n5% menú 3 pasos.\nSólo efectivo. No acumulable.',
    },
    {
        title: 'Gorila Burger',
        label: 'Gorila Burger',
        href: 'https://www.instagram.com/gorila.burger',
        image: 'https://i.ibb.co/v0kWRzT/Recurso-10.png',
        logo: '/partners/gorila.svg',
        discount: '15% de descuento miércoles y jueves\npidiendo por WhatsApp.\nSólo efectivo. No acumulable.',
    },
    {
        title: 'Valunita',
        label: 'Valunita',
        href: 'https://www.instagram.com/valunitacafe/',
        image: 'https://i.ibb.co/DDxnPqLj/Recurso-12.png',
        logo: '/partners/valunita.svg',
        discount: '15% de martes a viernes.\nCualquier medio de pago.\n15% en granos todos los días.\nSólo efectivo.',
    },
    {
        title: 'Baterías Brachetta',
        label: 'Brachetta',
        href: 'https://www.instagram.com/brachettabaterias',
        image: 'https://i.ibb.co/76F8QrG/Recurso-11.png',
        logo: '/partners/brachetta.svg',
        discount: '20% de descuento.\nSólo efectivo. No acumulable.',
    },
    {
        title: 'Del Bosque Cervecería',
        label: 'Del Bosque',
        href: 'https://www.instagram.com/bosquebeerbar',
        image: 'https://i.ibb.co/HfC7bKgZ/Recurso-9.png',
        logo: '/partners/bosque.svg',
        discount: '20% días de semana.\n15% fines de semana.',
    },
]
