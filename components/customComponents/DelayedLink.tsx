'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode, MouseEvent } from 'react';

interface DelayedLinkProps {
    href: string
    children: ReactNode
    delay?: number
    onBeforeNavigate?: () => void
    className?: string
}

const DelayedLink = ({
    href, children, delay = 350, onBeforeNavigate, className
}: DelayedLinkProps) => {
    const router = useRouter()

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        if (onBeforeNavigate) onBeforeNavigate()
        
        setTimeout(() => {
            router.push(href)
        }, delay)
    }

    return (
        <Link href={href} onClick={handleClick} className={className}>
            {children}
        </Link>
    )
}

export default DelayedLink;
