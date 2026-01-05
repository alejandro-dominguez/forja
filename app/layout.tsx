import Header from '@/components/layoutComponents/Header';
import Footer from '@/components/layoutComponents/Footer';
import WhatsappBtn from '@/components/layoutComponents/WhatsappBtn';
import './globals.css';
import { Montserrat, Dela_Gothic_One } from 'next/font/google';
import type { Metadata } from 'next';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
    title: 'Forja Fitness',
    description: 'Forja Fitness - Your Ultimate Gym Equipment Store',
};

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
});

const delaGothicOne = Dela_Gothic_One({
	variable: '--font-dela-gothic-one',
	subsets: ['latin'],
	weight: '400',
});

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en' className='bg-darker/95'>
            <body
                suppressHydrationWarning={true}
                className={`flex flex-col overflow-x-hidden overflow-y-scroll min-h-svh
                bg-slate-200 antialiased ${montserrat.variable} ${delaGothicOne.variable}
                mx-auto max-w-400 shadow shadow-darker/50`}
                id='scroll-y-Body'
            >
                <CartProvider>
                    <Header />
                    <main className='flex-1'>
                        {children}
                    </main>
                    <WhatsappBtn />
                    <Footer />
                </CartProvider>
                <Toaster
                    position='top-center'
                    containerStyle={{
                        top: '4.5rem',
                    }}
                    toastOptions={{
                        duration: 2500,
                        style: {
                            background: '#03033D',
                            color: '#fff',
                        },
                    }}
                />
            </body>
        </html>
    )
}

export default RootLayout;
