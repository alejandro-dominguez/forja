const ContactSection = () => {
    return (
        <section
            className='relative grid place-items-center w-full h-104
            bg-dark bg-cover bg-center bg-no-repeat rounded'
            style={{
                backgroundImage:
                    `url('https://i.ibb.co/twNHJZZF/573493125-18395325595127824-604066564901126863-n.jpg')`,
            }}
        >
            {/* Overlay */}
            <div className='absolute inset-0 bg-dark/60 rounded' />
            {/* Card */}
            <div className='relative z-10 w-2/3 bg-white rounded-md shadow-lg px-6 pt-4 pb-5'>
                <h3 className='text-xl font-extrabold mb-4'>
                    Déjanos Tu Mensaje
                </h3>
                <form className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4'>
                    {/* Nombre */}
                    <div className='flex flex-col gap-1'>
                        <label className='text-main text-sm font-medium'>
                            Nombre
                        </label>
                        <input
                            type='text'
                            placeholder='Nombre completo'
                            className='border-b border-main py-1 text-sm
                            text-slate-700 placeholder:text-slate-400'
                        />
                    </div>
                    {/* Teléfono */}
                    <div className='flex flex-col gap-1'>
                        <label className='text-main text-sm font-medium'>
                            Teléfono
                        </label>
                        <input
                            type='tel'
                            placeholder='Número de contacto'
                            className='border-b border-main py-1 text-sm
                            text-slate-700 placeholder:text-slate-400'
                        />
                    </div>
                    {/* Email */}
                    <div className='flex flex-col gap-1'>
                        <label className='text-main text-sm font-medium'>
                            Email
                        </label>
                        <input
                            type='email'
                            placeholder='Dirección de correo'
                            className='border-b border-main py-1 text-sm text-slate-700
                            placeholder:text-slate-400'
                        />
                    </div>
                    {/* Espaciador */}
                    <div className='hidden md:block' />
                    {/* Mensaje */}
                    <div className='flex flex-col gap-1 md:col-span-2'>
                        <label className='text-main text-sm font-medium'>
                            Mensaje
                        </label>
                        <textarea
                            rows={2}
                            placeholder='Escribe tu mensaje aquí'
                            className='border-b border-main py-1 text-sm text-slate-700
                            placeholder:text-slate-400'
                        />
                    </div>
                    {/* Botón */}
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
                </form>
            </div>
        </section>
    )
}

export default ContactSection;
