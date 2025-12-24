const ContactFormMessage = () => {
    return (
        <div className='flex flex-col gap-1 md:col-span-2'>
            <label className='text-light text-sm font-medium'>
                Mensaje
            </label>
            <textarea
                rows={2}
                placeholder='Escribe tu mensaje aquí'
                className='border-b border-main py-1 text-sm text-slate-700
                placeholder:text-slate-400'
            />
        </div>
    )
}

export default ContactFormMessage;
