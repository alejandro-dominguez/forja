const ContactFormEmail = () => {
    return (
        <div className='flex flex-col gap-1'>
            <label className='text-light text-sm font-medium'>
                Email
            </label>
            <input
                type='email'
                placeholder='Dirección de correo'
                className='border-b border-main py-1 text-sm text-slate-700
                placeholder:text-slate-400'
            />
        </div>
    )
}

export default ContactFormEmail;
