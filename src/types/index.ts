export interface Event {
    title: string,
    venue: Venue,
    time: string,
    date: string,
    image: string,
}

export interface Venue {
    name: string,
    image: string,
    events?: Event[],
}


export interface EventUpdate {
    image: string,
    url?: string,
}