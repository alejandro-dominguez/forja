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
        title: 'Jornada de Sparring',
        date: '20/01/2026',
        location: 'Sede Roca',
        shortDescription: 'Espacio de práctica controlada para atletas de boxeo y kickboxing.',
        longDescription:
        'La Jornada de Sparring Abierto fue diseñada como una instancia clave para que los atletas puedan aplicar, en un entorno real pero controlado, todo lo trabajado durante sus entrenamientos. A lo largo de la jornada se realizaron rounds rotativos con diferentes compañeros, fomentando la adaptación, la lectura del oponente y la toma de decisiones bajo presión.\n\n' +
        'El evento contó con la supervisión permanente del staff técnico de Forja Fitness, quienes guiaron cada combate, asegurando el cumplimiento de las normas de seguridad y promoviendo un ambiente de respeto y aprendizaje. Se realizaron pausas estratégicas para correcciones técnicas, análisis de errores y ajustes tácticos personalizados.\n\n' +
        'Esta jornada no solo permitió elevar el nivel competitivo de los participantes, sino también fortalecer el compañerismo y la confianza dentro del equipo. Una experiencia fundamental para quienes buscan progresar en boxeo y kickboxing de manera sólida y consciente.',
        image: 'https://images.unsplash.com/photo-1636581563884-39569e81cbad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0',
    },
    {
        id: 2,
        title: 'Seminario de MMA',
        date: '10/12/2026',
        location: 'Sede Avellaneda',
        shortDescription: 'Seminario enfocado en lucha, control y transiciones en el suelo.',
        longDescription:
        'El Seminario de MMA Grappling estuvo orientado a profundizar en los fundamentos y aplicaciones prácticas de la lucha y el combate en el suelo, con un enfoque específico en situaciones reales de MMA. Durante el encuentro se trabajaron técnicas de derribo, control posicional y defensa ante intentos de sumisión.\n\n' +
        'A lo largo del seminario se desarrollaron secuencias progresivas que permitieron a los asistentes comprender no solo la ejecución técnica, sino también el porqué de cada movimiento. Se enfatizó la importancia de las transiciones fluidas entre posiciones y la gestión de la energía durante el combate.\n\n' +
        'Este evento resultó ideal tanto para practicantes de MMA como para atletas de Jiu-Jitsu y disciplinas afines que buscan adaptar su juego al contexto del combate completo. Una experiencia intensiva que combinó técnica, estrategia y aplicación real.',
        image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Seminario de Kickboxing',
        date: '05/04/2025',
        location: 'Sede Avellaneda',
        shortDescription: 'Seminario abierto para todos los niveles, enfocado en striking y defensa.',
        longDescription:
        'El Seminario de Kickboxing fue una jornada intensiva orientada al perfeccionamiento del striking moderno, combinando técnica, precisión y fluidez de movimiento. Se trabajaron golpes de puño y pierna, combinaciones avanzadas y desplazamientos, adaptados a distintos niveles de experiencia.\n\n' +
        'Durante el evento se hizo especial énfasis en los aspectos defensivos, incluyendo bloqueos, esquivas y contraataques, permitiendo a los participantes desarrollar una visión más completa del combate. Cada bloque técnico fue acompañado de ejercicios prácticos para afianzar lo aprendido.\n\n' +
        'El seminario se destacó por su enfoque didáctico y dinámico, promoviendo un aprendizaje progresivo y aplicable al entrenamiento cotidiano. Una experiencia enriquecedora tanto para quienes se inician como para atletas que buscan pulir su rendimiento.',
        image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 4,
        title: 'Clínica de Boxeo',
        date: '15/03/2025',
        location: 'Sede Catamarca',
        shortDescription: 'Entrenamiento intensivo enfocado en técnica, combinaciones y sparring.',
        longDescription:
        'La Clínica de Boxeo Intensiva reunió a practicantes de todos los niveles en una jornada dedicada al desarrollo técnico y táctico del boxeo. A lo largo del encuentro se trabajaron fundamentos esenciales, combinaciones ofensivas, desplazamientos y control de la distancia.\n\n' +
        'El enfoque principal estuvo puesto en la correcta ejecución de cada técnica, priorizando la eficiencia del movimiento y la lectura del oponente. Se realizaron ejercicios específicos y rounds de sparring controlado, siempre bajo la atenta supervisión del equipo de entrenadores.\n\n' +
        'Esta clínica representó una oportunidad única para profundizar en los aspectos clave del boxeo, corregir errores comunes y adquirir herramientas aplicables al entrenamiento diario, fortaleciendo la base técnica de cada participante.',
        image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 5,
        title: 'Workshop de Fuerza',
        date: '10/02/2025',
        location: 'Sede Roca',
        shortDescription: 'Entrenamiento funcional enfocado en fuerza, potencia y resistencia.',
        longDescription:
        'El Workshop de Fuerza y Acondicionamiento estuvo diseñado para mejorar el rendimiento físico general de los atletas, con un enfoque específico en deportes de combate. Se trabajaron patrones básicos de movimiento, ejercicios de fuerza funcional y desarrollo de potencia.\n\n' +
        'Durante la jornada se aplicaron circuitos metabólicos y rutinas adaptadas a diferentes niveles, priorizando la correcta ejecución técnica y la prevención de lesiones. Los participantes aprendieron cómo estructurar entrenamientos eficientes y sostenibles.\n\n' +
        'Este workshop brindó herramientas clave para complementar el entrenamiento técnico, ayudando a los atletas a mejorar su resistencia, explosividad y control corporal, fundamentales para un desempeño deportivo integral.',
        image: 'https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 6,
        title: 'Workshop de Fuerza',
        date: '12/12/2026',
        location: 'Sede Roca',
        shortDescription: 'Entrenamiento funcional enfocado en fuerza, potencia y resistencia.',
        longDescription:
        'El Workshop de Fuerza y Acondicionamiento estuvo diseñado para mejorar el rendimiento físico general de los atletas, con un enfoque específico en deportes de combate. Se trabajaron patrones básicos de movimiento, ejercicios de fuerza funcional y desarrollo de potencia.\n\n' +
        'Durante la jornada se aplicaron circuitos metabólicos y rutinas adaptadas a diferentes niveles, priorizando la correcta ejecución técnica y la prevención de lesiones. Los participantes aprendieron cómo estructurar entrenamientos eficientes y sostenibles.\n\n' +
        'Este workshop brindó herramientas clave para complementar el entrenamiento técnico, ayudando a los atletas a mejorar su resistencia, explosividad y control corporal, fundamentales para un desempeño deportivo integral.',
        image: 'https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?q=80&w=1200&auto=format&fit=crop',
    },
]
