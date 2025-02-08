import { EventUpdate } from "@/types";
import { eventUpdates } from "./dummy-data"


/**
 * Get event update images to display on hero section
 * @returns {EventUpdate[]} Returns all event updates banners
 * 
 * 
 * @example 
 * const eventUpdates = await getEventUpdates()
 */
export const getEventUpdates = async (): Promise<EventUpdate[]> => {
    return eventUpdates;
}