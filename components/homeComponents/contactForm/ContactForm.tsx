import SubmitContactBtn from './contactFormComponents/SubmitContactBtn';
import ContactFormName from './contactFormComponents/ContactFormName';
import ContactFormPhone from './contactFormComponents/ContactFormPhone';
import ContactFormEmail from './contactFormComponents/ContactFormEmail';
import ContactFormMessage from './contactFormComponents/ContactFormMessage';

const ContactSection = () => {
    return (
        <section
            className='relative grid place-items-center w-full h-104
            bg-dark bg-cover bg-center bg-no-repeat rounded'
            style={{
                backgroundImage:
                `url('https://i.ibb.co/twNHJZZF/573493125-18395325595127824-604066564901126863-n.jpg')`
            }}
        >
            <div className='absolute inset-0 bg-dark/60 rounded' />
            <div className='relative z-10 w-2/3 bg-white rounded-md shadow-lg px-6 pt-4 pb-5'>
                <h3 className='text-2xl font-extrabold mb-4 text-main'>
                    Déjanos Tu Mensaje
                </h3>
                <form className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4'>
                    <ContactFormName />
                    <ContactFormPhone />
                    <ContactFormEmail />
                    {/* Espaciador */}
                    <div className='hidden md:block' />
                    <ContactFormMessage />
                    <SubmitContactBtn />
                </form>
            </div>
        </section>
    )
}

export default ContactSection;
