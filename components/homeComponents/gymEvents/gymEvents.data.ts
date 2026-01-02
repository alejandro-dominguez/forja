export type GymEvent = {
    id: number
    title: string
    date: string
    location: string
    shortDescription: string
    longDescription: string
    image: string
}

export const events: GymEvent[] = [
    {
        id: 1,
        title: 'Jornada de Sparring Abierto',
        date: '20/01/2026',
        location: 'Forja Fitness - Sede Roca',
        shortDescription: 'Espacio de práctica controlada para atletas de boxeo y kickboxing.',
        longDescription: 'La jornada de sparring abierto permitirá a los alumnos poner en práctica lo aprendido en un entorno seguro y supervisado. Se realizaron rounds rotativos, trabajo técnico y correcciones personalizadas.',
        image: 'https://images.unsplash.com/photo-1636581563884-39569e81cbad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        title: 'Seminario de MMA Grappling',
        date: '08/12/2025',
        location: 'Forja Fitness - Sede Avellaneda',
        shortDescription: 'Seminario enfocado en lucha, control y transiciones en el suelo.',
        longDescription: 'El seminario de MMA Grappling abordó técnicas de derribo, control en el suelo y transiciones clave para el combate real.',
        image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Seminario de Kickboxing',
        date: '05/04/2025',
        location: 'Forja Fitness - Sede Avellaneda',
        shortDescription: 'Seminario abierto para todos los niveles, enfocado en striking y defensa.',
        longDescription: 'Este seminario estuvo orientado al perfeccionamiento técnico del kickboxing moderno.',
        image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 4,
        title: 'Clínica de Boxeo Intensiva',
        date: '15/03/2025',
        location: 'Forja Fitness - Sede Catamarca',
        shortDescription: 'Entrenamiento intensivo enfocado en técnica, combinaciones y sparring.',
        longDescription: 'La clínica de boxeo intensiva reunió a practicantes de todos los niveles.',
        image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 5,
        title: 'Workshop de Fuerza y Acondicionamiento',
        date: '10/02/2025',
        location: 'Forja Fitness - Sede Roca',
        shortDescription: 'Entrenamiento funcional enfocado en fuerza, potencia y resistencia.',
        longDescription: 'Workshop diseñado para mejorar el rendimiento deportivo general.',
        image: 'https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?q=80&w=1200&auto=format&fit=crop',
    },
]
