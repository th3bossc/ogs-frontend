import { Event } from "@/types";
import { getEvents } from "./events";


/**
 * Get event update images to display on hero section
 * @returns {EventUpdate[]} Returns all event updates banners
 * 
 * 
 * @example 
 * const eventUpdates = await getEventUpdates()
 */
export const getEventUpdates = async (): Promise<Event[]> => {
    const events = await getEvents();

    return events.filter(event => event.priority)

}