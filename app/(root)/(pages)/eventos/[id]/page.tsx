import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { events } from '@/components/homeComponents/gymEvents/gymEvents.data';

type Props = {
    params: Promise<{ id: string }>
}

const Evento = async ({ params }: Props) => {
    const { id } = await params

    const event = events.find(e => e.id === Number(id))

    if (!event) {
        notFound()
    }

    return (
        <section className='px-3 sm:px-5 md:px-16 lg:px-24 mt-6 mb-24'>
            <div
                className='relative h-120 w-full shadow-darker/50
                border-4 border-darker rounded shadow'
            >
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className='object-cover'
                />
                <div className='absolute inset-0 bg-black/30 z-10' />
                <div className='absolute bottom-0 z-10 bg-darker w-full p-3 flex flex-col gap-2'>
                    <h1
                        className='font-dela-gothic-one tracking-wide
                        text-2xl md:text-3xl uppercase text-white'
                    >
                        {event.title}
                    </h1>
                    <p className='text-white/80 text-[.9rem]'>
                        {event.date} · {event.location}
                    </p>
                </div>
            </div>
            <p className='mt-5 mb-8'>
                {event.longDescription}
            </p>
            <Link
                href='/eventos'
                className='rounded-md bg-darker shadow shadow-darker/50 text-white
                grid place-items-center w-fit hover:bg-dark transition-colors py-2 px-4'
            >
                <span>
                    Eventos
                </span>
            </Link>
        </section>
    )
}

export default Evento;
