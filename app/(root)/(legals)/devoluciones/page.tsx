const Devoluciones = () => {
    return (
        <section className='flex flex-col gap-2 px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5'>
            <h1 className='legals-title'>
                Devolución y Cambio de Producto
            </h1>
            <div className='legals-text-container'>
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
        </section>
    )
}

export default Devoluciones;
