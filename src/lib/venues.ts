import axios from 'axios'
import { getEvents } from "./events";
import { backendUrl } from '@/env';
import { formatVenues } from './format-data';
import { Venue, VenueData } from '@/types';

/**
 * Get venue details from db
 * @returns {Venue[]} Returns all the venues
 * 
 * 
 * @example
 * const venues = await getVenues();
 */
export const getVenues = async (): Promise<Venue[]> => {
    const venues = await axios.get<{
        data: VenueData[]
    }>(`${backendUrl}/api/venues?pagination[limit]=100`)
    const formattedVenueData = formatVenues(venues.data.data)
    return formattedVenueData;
}