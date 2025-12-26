'use client';

import { IoMenu, IoClose } from 'react-icons/io5';

interface Props {
    state: boolean
    onToggle: (newValue: boolean) => void
}

const NavMenuBtn = ({ state, onToggle }: Props) => {
    return (
        <button
            className='mt-2 -ml-1 z-50 relative'
            onClick={() => onToggle(!state)}
            aria-label={state ? 'cerrar menú' : 'abrir menú' }
        >
            {state ? <IoClose size={38} /> : <IoMenu size={38} />}
        </button>
    )
}

export default NavMenuBtn;
