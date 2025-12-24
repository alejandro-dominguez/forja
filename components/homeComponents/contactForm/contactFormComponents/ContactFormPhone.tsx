const ContactFormPhone = () => {
    return (
        <div className='flex flex-col gap-1'>
            <label className='text-light text-sm font-medium'>
                Teléfono
            </label>
            <input
                type='tel'
                placeholder='Número de contacto'
                className='border-b border-main py-1 text-sm
                text-slate-700 placeholder:text-slate-400'
            />
        </div>
    )
}

export default ContactFormPhone;
