import { Event, Venue } from "@/types";
import { events } from "./dummy-data"


/**
 * Get event details from db
 * @param {Venue} venue - optional attribute to sort by certain event 
 * @returns {Event[]} The events that satisfy the condition
 * 
 * 
 * @example
 * const allEvents = await getEvents();
 * const eventsInVenue = await getEvents(venue);
 */
export const getEvents = async (venue?: Venue): Promise<Event[]> => {
    if (venue) {
        return events.filter(event => event.venue === venue);
    }
    else {
        return events;
    }
}