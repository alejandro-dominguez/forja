export type Product = {
    id: number
    name: string
    slug: string
    description: string
    longDescription: string
    price: number
    stock: boolean,
    featured: boolean,
    category:
        | 'indumentaria'
        | 'suplementos'
        | 'protecciones'
        | 'guantes-boxeo'
        | 'guantes-kick'
        | 'guantes-mma'
        | 'tibiales'
    brand: 'Leone' | 'Twins' | 'Venum' | 'Everlast' | 'Forja'
    image: string
}

export const products: Product[] = [
    // ─────────────────────
    // GUANTES BOXEO
    // ─────────────────────
    {
        id: 1,
        name: 'Guantes de Boxeo Leone 16oz',
        slug: 'guantes-boxeo-leone-16oz',
        description: 'Guantes profesionales para boxeo y sparring.',
        longDescription:
        'Guantes Leone de 16oz diseñados para entrenamiento intenso y sparring controlado.\n\nCuentan con acolchado multicapa, excelente absorción de impactos y ajuste ergonómico.',
        price: 45000,
        stock: true,
        featured: true,
        category: 'guantes-boxeo',
        brand: 'Leone',
        image:
        'https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 2,
        name: 'Guantes de Boxeo Everlast Pro',
        slug: 'guantes-boxeo-everlast-pro',
        description: 'Guantes ideales para trabajo técnico.',
        longDescription:
        'Modelo clásico Everlast pensado para bolsa y pads.\n\nBrinda soporte de muñeca y gran durabilidad.',
        price: 42000,
        stock: true,
        featured: true,
        category: 'guantes-boxeo',
        brand: 'Everlast',
        image:
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'Guantes de Boxeo Venum Challenger',
        slug: 'guantes-boxeo-venum-challenger',
        description: 'Guantes resistentes para entrenamiento diario.',
        longDescription:
        'Guantes Venum Challenger con espuma de alta densidad.\n\nIdeales para quienes entrenan boxeo de forma regular.',
        price: 39000,
        stock: true,
        featured: true,
        category: 'guantes-boxeo',
        brand: 'Venum',
        image:
        'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop',
    },

    // ─────────────────────
    // GUANTES KICKBOXING
    // ─────────────────────
    {
        id: 4,
        name: 'Guantes Kickboxing Twins',
        slug: 'guantes-kickboxing-twins',
        description: 'Guantes versátiles para striking.',
        longDescription:
        'Guantes Twins diseñados para kickboxing y muay thai.\n\nExcelente balance entre protección y movilidad.',
        price: 48000,
        stock: true,
        featured: true,
        category: 'guantes-kick',
        brand: 'Twins',
        image:
        'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 5,
        name: 'Guantes Kickboxing Leone',
        slug: 'guantes-kickboxing-leone',
        description: 'Guantes cómodos para entrenamiento mixto.',
        longDescription:
        'Guantes Leone con diseño anatómico.\n\nAptos para pads, bolsa y sparring ligero.',
        price: 46000,
        stock: true,
        featured: false,
        category: 'guantes-kick',
        brand: 'Leone',
        image:
        'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=800&auto=format&fit=crop',
    },

    // ─────────────────────
    // GUANTES MMA
    // ─────────────────────
    {
        id: 6,
        name: 'Guantes MMA Venum',
        slug: 'guantes-mma-venum',
        description: 'Guantes abiertos para MMA.',
        longDescription:
        'Guantes Venum para MMA y entrenamiento funcional.\n\nPermiten agarres seguros sin perder protección.',
        price: 38000,
        stock: true,
        featured: false,
        category: 'guantes-mma',
        brand: 'Venum',
        image:
        'https://images.unsplash.com/photo-1599058917212-d750089bc07b?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 7,
        name: 'Guantes MMA Twins',
        slug: 'guantes-mma-twins',
        description: 'Guantes de MMA para sparring.',
        longDescription:
        'Guantes Twins con acolchado reforzado.\n\nIdeales para entrenamientos de MMA controlados.',
        price: 41000,
        stock: true,
        featured: false,
        category: 'guantes-mma',
        brand: 'Twins',
        image:
        'https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?q=80&w=800&auto=format&fit=crop',
    },

    // ─────────────────────
    // TIBIALES
    // ─────────────────────
    {
        id: 8,
        name: 'Tibiales Venum Elite',
        slug: 'tibiales-venum-elite',
        description: 'Protección para tibia y empeine.',
        longDescription:
        'Tibiales Venum con espuma de alta densidad.\n\nDiseñados para muay thai y kickboxing.',
        price: 52000,
        stock: true,
        featured: false,
        category: 'tibiales',
        brand: 'Venum',
        image:
        'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 9,
        name: 'Tibiales Leone',
        slug: 'tibiales-leone',
        description: 'Tibiales cómodos y resistentes.',
        longDescription:
        'Tibiales Leone con ajuste seguro.\n\nBrindan excelente absorción de impacto.',
        price: 48000,
        stock: true,
        featured: false,
        category: 'tibiales',
        brand: 'Leone',
        image:
        'https://images.unsplash.com/photo-1605296867490-40f5a38e6e92?q=80&w=800&auto=format&fit=crop',
    },

    // ─────────────────────
    // PROTECCIONES
    // ─────────────────────
    {
        id: 10,
        name: 'Protector Bucal Twins',
        slug: 'protector-bucal-twins',
        description: 'Protección dental moldeable.',
        longDescription:
        'Protector bucal Twins de alta calidad.\n\nAsegura comodidad y correcta respiración.',
        price: 8500,
        stock: true,
        featured: false,
        category: 'protecciones',
        brand: 'Twins',
        image:
        'https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 11,
        name: 'Canilleras Everlast',
        slug: 'canilleras-everlast',
        description: 'Protección ligera para entrenamiento.',
        longDescription:
        'Canilleras Everlast para trabajo técnico.\n\nIdeales para principiantes.',
        price: 15000,
        stock: true,
        featured: false,
        category: 'protecciones',
        brand: 'Everlast',
        image:
        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop',
    },

    // ─────────────────────
    // INDUMENTARIA
    // ─────────────────────
    {
        id: 12,
        name: 'Remera Deportiva Forja',
        slug: 'remera-deportiva-forja',
        description: 'Remera liviana para entrenamiento.',
        longDescription:
        'Remera técnica Forja de secado rápido.\n\nIdeal para entrenamientos intensos.',
        price: 18000,
        stock: true,
        featured: false,
        category: 'indumentaria',
        brand: 'Forja',
        image:
        'https://images.unsplash.com/photo-1526401485004-2fda9f6c8e07?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 13,
        name: 'Short Muay Thai Leone',
        slug: 'short-muay-thai-leone',
        description: 'Short cómodo y liviano.',
        longDescription:
        'Short Leone con diseño clásico.\n\nPermite máxima movilidad.',
        price: 25000,
        stock: true,
        featured: false,
        category: 'indumentaria',
        brand: 'Leone',
        image:
        'https://images.unsplash.com/photo-1599058917212-d750089bc07b?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 14,
        name: 'Buzo Deportivo Forja',
        slug: 'buzo-deportivo-forja',
        description: 'Buzo ideal para entrada en calor.',
        longDescription:
        'Buzo Forja cómodo y resistente.\n\nPerfecto para pre y post entrenamiento.',
        price: 32000,
        stock: true,
        featured: false,
        category: 'indumentaria',
        brand: 'Forja',
        image:
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    },

    // ─────────────────────
    // SUPLEMENTOS
    // ─────────────────────
    {
        id: 15,
        name: 'Proteína Whey Venum',
        slug: 'proteina-whey-venum',
        description: 'Suplemento proteico.',
        longDescription:
        'Proteína whey para recuperación muscular.\n\nIdeal para deportistas de alto rendimiento.',
        price: 32000,
        stock: true,
        featured: false,
        category: 'suplementos',
        brand: 'Venum',
        image:
        'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 16,
        name: 'Creatina Forja',
        slug: 'creatina-forja',
        description: 'Creatina monohidratada.',
        longDescription:
        'Creatina de alta pureza.\n\nMejora fuerza y rendimiento.',
        price: 21000,
        stock: true,
        featured: false,
        category: 'suplementos',
        brand: 'Forja',
        image:
        'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    },

    // ─────────────────────
    // ACCESORIOS EXTRA (para completar 24)
    // ─────────────────────
    {
        id: 17,
        name: 'Vendas de Boxeo Leone',
        slug: 'vendas-boxeo-leone',
        description: 'Vendas elásticas.',
        longDescription:
        'Vendas Leone para protección de manos.\n\nIndispensables para boxeo y kickboxing.',
        price: 6500,
        stock: true,
        featured: false,
        category: 'protecciones',
        brand: 'Leone',
        image:
        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 18,
        name: 'Bolso Deportivo Venum',
        slug: 'bolso-deportivo-venum',
        description: 'Bolso amplio para equipamiento.',
        longDescription:
        'Bolso Venum resistente y espacioso.\n\nIdeal para llevar todo tu equipo.',
        price: 38000,
        stock: true,
        featured: false,
        category: 'indumentaria',
        brand: 'Venum',
        image:
        'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 19,
        name: 'Guantes Boxeo Forja',
        slug: 'guantes-boxeo-forja',
        description: 'Guantes nacionales de alta calidad.',
        longDescription:
        'Guantes Forja pensados para entrenamiento diario.\n\nGran relación precio-calidad.',
        price: 35000,
        stock: true,
        featured: false,
        category: 'guantes-boxeo',
        brand: 'Forja',
        image:
        'https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 20,
        name: 'Short MMA Venum',
        slug: 'short-mma-venum',
        description: 'Short flexible para MMA.',
        longDescription:
        'Short Venum diseñado para grappling y striking.\n\nLiviano y resistente.',
        price: 29000,
        stock: true,
        featured: false,
        category: 'indumentaria',
        brand: 'Venum',
        image:
        'https://images.unsplash.com/photo-1599058917212-d750089bc07b?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 21,
        name: 'Protector Inguinal Everlast',
        slug: 'protector-inguinal-everlast',
        description: 'Protección esencial.',
        longDescription:
        'Protector inguinal Everlast.\n\nCómodo y seguro para entrenamientos.',
        price: 14000,
        stock: true,
        featured: false,
        category: 'protecciones',
        brand: 'Everlast',
        image:
        'https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 22,
        name: 'Tobilleras Leone',
        slug: 'tobilleras-leone',
        description: 'Soporte para tobillos.',
        longDescription:
        'Tobilleras Leone elásticas.\n\nIdeales para prevención de lesiones.',
        price: 7000,
        stock: true,
        featured: false,
        category: 'protecciones',
        brand: 'Leone',
        image:
        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 23,
        name: 'Cuerda de Saltar Everlast',
        slug: 'cuerda-saltar-everlast',
        description: 'Cuerda para cardio.',
        longDescription:
        'Cuerda Everlast ajustable.\n\nIdeal para calentamiento y resistencia.',
        price: 9000,
        stock: true,
        featured: false,
        category: 'indumentaria',
        brand: 'Everlast',
        image:
        'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 24,
        name: 'Guantes Kickboxing Forja',
        slug: 'guantes-kickboxing-forja',
        description: 'Guantes nacionales para striking.',
        longDescription:
        'Guantes Forja diseñados para kickboxing.\n\nResistentes y cómodos.',
        price: 37000,
        stock: true,
        featured: false,
        category: 'guantes-kick',
        brand: 'Forja',
        image:
        'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop',
    },
]
