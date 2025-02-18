export interface Event {
    title: string,
    description: string,
    venue: Venue,
    time: string,
    date: Date,
    image?: string,
    priority: boolean,
}

export interface Venue {
    name: string,
    image?: string,
    events?: Event[],
    location: string,
    description: string,
}

export interface Notification {
    details: string,
    time: Date,
}

export interface Workshop {
    title: string,
    venue: Venue,
    time: string,
    date: Date,
    image?: string,
}

////////////////////////////////////////////////

export interface VenueData {
    id: string,
    name: string,
    image?: ImageData,
    events?: EventData[],
    location: string,
    description: string,
}

export interface ImageData {
    url: string,
}

export interface EventData {
    id: string,
    title: string,
    description: string,
    venue: VenueData,
    time: string,
    date: string,
    image?: ImageData,
    priority: boolean,
}

export interface WorkshopData {
    id: string,
    title: string,
    venue: VenueData,
    time: string,
    date: string,
    image?: ImageData,
}


export interface NotificationData {
    id: string,
    details: string,
    time: string,
}