import axios from 'axios'

import { Event, EventData, Venue, VenueData } from "@/types";
import { backendUrl } from "@/env";
import { formatEvents } from './format-data';


/**
 * Get event details from db
 * @param {string} venueName - optional attribute to sort by certain event 
 * @returns {Event[]} The events that satisfy the condition
 * 
 * 
 * @example
 * const allEvents = await getEvents();
 * const eventsInVenue = await getEvents(venue);
 */
export const getEvents = async (venueName?: string): Promise<Event[]> => {
    if (venueName) {
        const response = await axios.get<{ data: VenueData[] }>(`${backendUrl}/api/venues?pagination[limit]=100`);
        console.log(response.data)
        const searchedVenue = response.data.data.filter(data => data.name === venueName);
        if (searchedVenue.length === 0)
            throw Error("Error finding venue");

        return formatEvents(searchedVenue[0].events)
    }
    else {
        const response = await axios.get<{ data: EventData[] }>(`${backendUrl}/api/events?pagination[limit]=100`);
        console.log(response.data)
        return formatEvents(response.data.data);
    }
}