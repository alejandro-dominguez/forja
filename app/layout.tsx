import Navbar from '@/components/layoutComponents/Navbar';
import Footer from '@/components/layoutComponents/Footer';
import './globals.css';
import WhatsappBtn from '@/components/layoutComponents/WhatsappBtn';
import { Montserrat, Dela_Gothic_One } from 'next/font/google';
import type { Metadata } from 'next';

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`
                    flex flex-col min-h-svh overflow-x-hidden overflow-y-scroll
                    ${montserrat.variable} ${delaGothicOne.variable} antialiased
                `}
            >
                    <Navbar />
                <main className='flex-1'>
                    {children}
                </main>
                    <WhatsappBtn />
                    <Footer />
            </body>
        </html>
    );
}
