'use client';

type FiltersState = {
    category: string
    brand: string
    search: string
}

type Props = {
    filters: FiltersState
    onChange: (f: FiltersState) => void
}

const Filters = ({ filters, onChange }: Props) => {
    return (
        <div className='flex flex-wrap gap-4'>
            <select
                value={filters.category}
                onChange={e =>
                    onChange({
                        ...filters,
                        category: e.target.value,
                        brand: 'all',
                    })
                }
            >
                <option value='all'>Todas las categorías</option>
                <option value='guantes-boxeo'>guantes boxeo</option>
                <option value='guantes-kick'>guantes kick</option>
                <option value='guantes-mma'>guantes mma</option>
                <option value='protecciones'>protecciones</option>
                <option value='indumentaria'>indumentaria</option>
                <option value='suplementos'>suplementos</option>
                <option value='tibiales'>tibiales</option>
            </select>
            <select
                value={filters.brand}
                onChange={e =>
                    onChange({
                        ...filters,
                        brand: e.target.value,
                        category: 'all',
                    })
                }
            >
                <option value='all'>Todas las marcas</option>
                <option value='Leone'>Leone</option>
                <option value='Twins'>Twins</option>
                <option value='Venum'>Venum</option>
                <option value='Everlast'>Everlast</option>
                <option value='Forja'>Forja</option>
            </select>
            <input
                placeholder='Buscar producto'
                value={filters.search}
                onChange={e =>
                    onChange({
                        ...filters,
                        brand: 'all',
                        category: 'all',
                        search: e.target.value
                    })
                }
            />
        </div>
    )
}

export default Filters;
