const ContactFormMessage = () => {
    return (
        <div className='flex flex-col gap-1 md:col-span-2'>
            <label className='flex gap-1 text-light font-bold'>
                Mensaje
                <span className='text-red-500 font-semibold'>
                    *
                </span>
            </label>
            <textarea
                rows={2}
                placeholder='Escribe tu mensaje aquí'
                className='border-b border-main mt-1 pb-1 text-slate-700 placeholder:text-slate-400'
            />
        </div>
    )
}

export default ContactFormMessage;
