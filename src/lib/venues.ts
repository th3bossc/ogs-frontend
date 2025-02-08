import { Venue } from "@/types";
import { venues } from "./dummy-data"
import { getEvents } from "./events";


/**
 * Get venue details from db
 * @param {boolean} populateEvents - optional attribute to attach event details to each venue
 * @returns {Venue[]} Returns all the venues
 * 
 * 
 * @example
 * const venues = await getVenues();
 */
export const getVenues = async (populateEvents?: boolean): Promise<Venue[]> => {
    if (populateEvents) {
        return await Promise.all(venues.map(async venue => ({
            ...venue,
            events: await getEvents(venue),
        })))
    }
    else {
        return venues;
    }
}