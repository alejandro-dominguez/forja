'use client';

type Props = {
    i: number
    current: number
    onChange: (p: number) => void
}

const PaginationNumbers = ({ current, i, onChange }: Props) => {
    const page = i + 1
    const isActive = current === page

    return (
        <button
            disabled={isActive}
            onClick={() => onChange(page)}
            className={isActive
                ? 'font-bold underline underline-offset-2 text-dark cursor-auto'
                : 'font-semibold cursor-pointer text-darker'
            }
        >
            {page}
        </button>
    )
}

export default PaginationNumbers;
