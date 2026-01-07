'use client';

type Props = {
    onConfirm: () => void
    onCancel: () => void
}

const ClearCartPopUp = ({ onConfirm, onCancel }: Props) => {
    return (
        <div
            className='fixed inset-0 z-50 grid place-items-center bg-black/60'
            onClick={onCancel}
        >
            <div
                className='bg-darker text-white rounded p-5 max-w-sm shadow-lg'
                onClick={e => e.stopPropagation()}
            >
                <h3 className='text-lg font-semibold mb-1'>
                    Vaciar carrito
                </h3>
                <p className='text-[.95rem] text-white/80 mb-6'>
                    ¿Seguro que deseas vaciar tu carrito?
                </p>
                <div className='flex justify-between'>
                    <button
                        onClick={onConfirm}
                        className='px-6 py-2 rounded bg-red-600/90 cursor-pointer
                        hover:bg-red-500/90 transition-colors font-medium'
                    >
                        Vaciar
                    </button>
                    <button
                        onClick={onCancel}
                        className='px-4 py-2 rounded border-2 border-white/50
                        hover:bg-white/10 transition-colors cursor-pointer'
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClearCartPopUp;
