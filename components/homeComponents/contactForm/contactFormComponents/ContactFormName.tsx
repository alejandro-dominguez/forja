const ContactFormName = () => {
    return (
        <div className='flex flex-col'>
            <label className='flex gap-1 text-light font-bold'>
                Nombre
                <span className='text-red-500 font-semibold'>
                    *
                </span>
            </label>
            <input
                type='text'
                placeholder='Nombre completo'
                className='border-b border-main mt-1 pb-1 text-slate-700 placeholder:text-slate-400'
            />
        </div>
    )
}

export default ContactFormName;
