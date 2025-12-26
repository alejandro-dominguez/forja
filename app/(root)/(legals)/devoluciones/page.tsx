const Devoluciones = () => {
    return (
        <div className='flex flex-col gap-2 px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5'>
            <h1 className='font-bold text-2xl mb-1'>
                Devolución y Cambio de producto
            </h1>
            <div className='flex flex-col gap-1 text-[.975rem] leading-6 md:leading-normal md:text-base'>
                <p>
                    El comprador podrá, realizar la devolución o cambio del producto 
                    comprado siempre que se encuentre en buen estado el paquete, cerrado, 
                    que no este vencido, que pertenezca a la última presentación de 
                    la marca y siendo una presentación que Forja trabaja al momento 
                    del cambio o devolución.
                </p>
                <p>
                    Los cambios se realizan por productos, no se realiza devolución de dinero.    
                </p> 
                <p>
                    Los cambios y devoluciones son costeados por el cliente. 
                    Salvo que se deban a un error u omisión de Forja.
                </p>
            </div>
        </div>
    )
}

export default Devoluciones;
