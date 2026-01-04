'use client';

import Image from 'next/image';
import useIsMobile from '@/customHooks/useIsMobile';
import { useRef, useState } from 'react';

type Props = {
  image: string
  name: string
}

const ProductCardImage = ({ image, name }: Props) => {
    const isMobile = useIsMobile(1024)
    const containerRef = useRef<HTMLDivElement>(null)

    const [ position, setPosition ] = useState({ x: 50, y: 50 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100

        setPosition({ x, y })
    }

    return (
        <div
            ref={containerRef}
            onMouseMove={!isMobile ? handleMouseMove : undefined}
            className='relative h-52 w-full bg-white overflow-hidden
            flex items-center justify-center group cursor-zoom-in'
        >
            <Image
                src={image}
                alt={name}
                fill
                sizes='(max-width: 768px) 100vw, 25vw'
                className={`object-cover p-3 transition-transform duration-300 ease-out bg-cover
                ${!isMobile ? 'group-hover:scale-150' : ''}`}
                style={!isMobile? {transformOrigin: `${position.x}% ${position.y}%`} : undefined}
            />
        </div>
    )
}

export default ProductCardImage;
