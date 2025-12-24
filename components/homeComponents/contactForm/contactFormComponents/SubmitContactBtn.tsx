const SubmitContactBtn = () => {
    return (
        <div className='md:col-span-2 flex justify-center mt-2'>
            <button
                type='submit'
                disabled={true}
                className='bg-lighter hover:bg-main text-white text-sm font-semibold
                px-5 py-2 transition-colors shadow-sm cursor-pointer rounded-3xl'
            >
                ENVIAR
            </button>
        </div>
    )
}

export default SubmitContactBtn;
