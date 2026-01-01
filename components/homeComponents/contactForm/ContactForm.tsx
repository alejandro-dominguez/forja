import SubmitContactBtn from './contactFormComponents/SubmitContactBtn';
import ContactFormName from './contactFormComponents/ContactFormName';
import ContactFormPhone from './contactFormComponents/ContactFormPhone';
import ContactFormEmail from './contactFormComponents/ContactFormEmail';
import ContactFormMessage from './contactFormComponents/ContactFormMessage';

const ContactSection = () => {
    return (
        <section
            className='relative grid place-items-center w-full h-125
            md:h-108 bg-dark rounded shadow shadow-darker/50'
            style={{ backgroundImage: `url('https://i.ibb.co/FLbXtvcV/fondo-contacto.png')` }}
        >
            <div className='absolute inset-0 bg-dark/50 rounded'/>
            <div
                className='relative z-10 bg-white shadow-lg
                shadow-darker/50 py-5 px-7 sm:px-10 rounded'
            >
                <h3 className='text-xl sm:text-2xl font-extrabold mb-4 text-main leading-tight'>
                    Déjanos Tu Mensaje
                </h3>
                <form
                    className='grid grid-cols-1 md:grid-cols-2
                    gap-x-12 gap-y-4 w-fit mx-auto text-light/90'
                >
                    <ContactFormName />
                    <ContactFormPhone />
                    <ContactFormEmail />
                    <ContactFormMessage />
                    <SubmitContactBtn />
                </form>
            </div>
        </section>
    )
}

export default ContactSection;
