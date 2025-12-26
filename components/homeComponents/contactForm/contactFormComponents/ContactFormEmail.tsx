const ContactFormEmail = () => {
    return (
        <div className='flex flex-col'>
            <label className='font-bold'>
                Email
            </label>
            <input
                type='email'
                placeholder='Dirección de correo'
                className='border-b border-main mt-1 pb-1 text-slate-700 placeholder:text-slate-400'
            />
        </div>
    )
}

export default ContactFormEmail;
