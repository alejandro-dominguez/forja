import { GymEvent } from '@/components/homeComponents/gymEvents/gymEvents.data';

export const parseEventDate = (date: string) => {
    const [day, month, year] = date.split('/').map(Number)
    return new Date(year, month - 1, day)
}

export const sortEventsByDateAsc = (events: GymEvent[]) =>
    [...events].sort((a, b) => parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime())
