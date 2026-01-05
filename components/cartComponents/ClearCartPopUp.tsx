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
                className='bg-dark text-white rounded-lg p-6 w-[90%] max-w-sm shadow-lg'
                onClick={e => e.stopPropagation()} // 👈 evita cerrar al clickear dentro
            >
                <h3 className='text-lg font-semibold mb-3'>
                    Vaciar carrito
                </h3>
                <p className='text-sm text-white/80 mb-5'>
                    ¿Seguro que deseas vaciar tu carrito?
                </p>
                <div className='flex justify-end gap-3'>
                    <button
                        onClick={onConfirm}
                        className='px-4 py-2 rounded-md bg-red-600 cursor-pointer
                        hover:bg-red-700 transition-colors font-medium'
                    >
                        Vaciar
                    </button>
                    <button
                        onClick={onCancel}
                        className='px-4 py-2 rounded-md border border-white/50
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
