const ContactFormName = () => {
    return (
        <div className='flex flex-col gap-1'>
            <label className='text-light text-sm font-medium'>
                Nombre
            </label>
            <input
                type='text'
                placeholder='Nombre completo'
                className='border-b border-main py-1 text-sm
                text-slate-700 placeholder:text-slate-400'
            />
        </div>
    )
}

export default ContactFormName;
