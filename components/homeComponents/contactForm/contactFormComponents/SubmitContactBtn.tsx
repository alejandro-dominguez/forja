const SubmitContactBtn = () => {
    return (
        <div className='md:col-span-2 flex justify-center'>
            <button
                type='submit'
                disabled={true}
                className='bg-lighter hover:bg-main text-white text-sm font-semibold
                px-6 py-[.675rem] transition-colors cursor-pointer rounded-3xl tracking-wide
                text-shadow text-shadow-darker shadow shadow-darker/50 mt-1 uppercase'
            >
                ENVIAR
            </button>
        </div>
    )
}

export default SubmitContactBtn;
