export type Activity = {
    id: number
    title: string
    image: string
    cta: string
    description: string
}

export const activities: Activity[] = [
    {
        id: 1,
        title: 'Boxeo',
        image: '/activities/boxeo.png',
        cta: 'Mejorá tu técnica y potencia',
        description: 'El boxeo es una disciplina completa que desarrolla fuerza, resistencia, coordinación y reflejos. En Forja entrenamos técnica, defensa y condición física en un ambiente exigente y motivador.',
    },
    {
        id: 2,
        title: 'Kickboxing',
        image: '/activities/kickboxing.png',
        cta: 'Golpes, patadas y explosividad',
        description: 'El kickboxing combina técnicas de puño y pierna para un entrenamiento intenso y dinámico. Ideal para mejorar resistencia, velocidad y control corporal.',
    },
    {
        id: 3,
        title: 'MMA',
        image: '/activities/mma.png',
        cta: 'Combate real, entrenamiento completo',
        description: 'Las Artes Marciales Mixtas integran striking, lucha y suelo. Entrenamientos completos enfocados en técnica, estrategia y preparación física.',
    },
    {
        id: 4,
        title: 'Taekwondo',
        image: '/activities/taekwondo.png',
        cta: 'Disciplina, técnica y precisión',
        description: 'El Taekwondo desarrolla flexibilidad, coordinación y control mental. Ideal para todas las edades, combinando arte marcial y formación personal.',
    },
    {
        id: 5,
        title: 'Muay Thai',
        image: '/activities/muay-thai.png',
        cta: 'El arte de las ocho armas',
        description: 'Disciplina tradicional tailandesa que utiliza puños, codos, rodillas y piernas. Entrenamientos intensos que forjan resistencia y carácter.',
    },
    {
        id: 6,
        title: 'Brazilian Jiu-Jitsu',
        image: '/activities/brazilian-jiu-jitsu.png',
        cta: 'Control, técnica y estrategia',
        description: 'Arte marcial centrado en el combate en el suelo. Ideal para desarrollar técnica, paciencia y control, sin depender de la fuerza bruta.',
    },
]
