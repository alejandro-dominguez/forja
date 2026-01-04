'use client';

import Filters from './Filters';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import useIsMobile from '@/customHooks/useIsMobile';
import { products } from '@/data/products.data';
import { useMemo, useState } from 'react';

const ShopContainer = () => {
    const isMobile = useIsMobile(768)
    const ITEMS_PER_PAGE = isMobile ? 4 : 8

    const [ filters, setFilters ] = useState({
        category: 'all',
        brand: 'all',
        search: '',
    })

    const [ page, setPage ] = useState(1)

    const filtered = useMemo(() => {
        setPage(1)
        return products.filter(p => {
            const matchCategory =
                filters.category === 'all' || p.category === filters.category
            const matchBrand =
                filters.brand === 'all' || p.brand === filters.brand
            const matchSearch = p.name
                .toLowerCase()
                .includes(filters.search.toLowerCase())

            return matchCategory && matchBrand && matchSearch
        })
    }, [filters])

  const start = (page - 1) * ITEMS_PER_PAGE
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE)

    return (
        <>
        <Filters filters={filters} onChange={setFilters} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4'>
            {paginated.map(p => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
        <Pagination
            total={filtered.length}
            perPage={ITEMS_PER_PAGE}
            current={page}
            onChange={setPage}
        />
        </>
    )
}

export default ShopContainer;
