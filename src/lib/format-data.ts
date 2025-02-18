import { backendUrl } from "@/env"
import { type Event, type EventData, type Venue, type VenueData, type ImageData, NotificationData, Notification, WorkshopData, Workshop } from '@/types'


export const formatEvents = (eventsData?: EventData[]): Event[] => {
    if (!eventsData)
        return [];
    return eventsData.map(formatEvent)
}

export const formatWorkshops = (workshopsData?: WorkshopData[]): Workshop[] => {
    if (!workshopsData)
        return [];
    return workshopsData.map(formatWorkshop);
}

export const formatVenues = (venuesData?: VenueData[]): Venue[] => {
    if (!venuesData)
        return [];
    return venuesData.map(formatVenue)
}

export const formatNotifications = (notificationData: NotificationData[]): Notification[] => {
    if (!notificationData)
        return [];
    return notificationData.map(formatNotification)
}


export const formatEvent = (event: EventData): Event => {
    return ({
        title: event.title,
        venue: formatVenue(event.venue),
        description: event.description,
        time: event.time,
        date: new Date(event.date),
        image: formatImage(event.image),
        priority: event.priority,
    })
}

export const formatWorkshop = (workshop: WorkshopData): Workshop => {
    return ({
        title: workshop.title,
        venue: formatVenue(workshop.venue),
        time: workshop.time,
        date: new Date(workshop.date),
        image: formatImage(workshop.image)
    })
}

export const formatVenue = (venue: VenueData): Venue => {
    return ({
        name: venue.name,
        image: formatImage(venue.image),
        events: formatEvents(venue.events),
        location: venue.location,
        description: venue.description,
    })
}

export const formatImage = (image?: ImageData): string | undefined => {
    if (!image)
        return image;
    return backendUrl + image.url
}

export const formatNotification = (notification: NotificationData): Notification => {
    return ({
        details: notification.details,
        time: new Date(notification.time)
    })
}