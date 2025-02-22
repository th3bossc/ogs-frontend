"use client"
import React from 'react'
import { useEffect } from "react";
import { getVenues } from "@/lib/venues";
import { Venue } from "@/types";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Venuepage from "@/components/VenuePage/venuepage";
import { group } from 'console';

const page = () => {
    const [loading, setLoading] = useState(true);
    const [venues, setVenues] = useState<Venue[]>([]);
    const [curr, setCurr] = useState(-1);
    const path = usePathname().split('/');
    const id = path[path.length-1];
    useEffect(() => {
      const fetchVenues = async () => {
        try {
          const data = await getVenues();
          console.log("Fetched venues:", data); 
          setVenues(data);
          data.map((i,ind) => {
            if (i["name"].toLowerCase() == id) {
              console.log("Route",id);
              setCurr(ind);
            }
          });   
        } catch (error) {
          console.error("Error fetching venues:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchVenues();
    }, []);
    if (curr == -1) {
        return (<div>Venue not found</div>)
    }
    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
        let formattedDate = date.toLocaleDateString("en-US", options);
      
        // Add correct suffix (st, nd, rd, th)
        const day = date.getDate();
        const suffix =
          day === 1 || day === 21 || day === 31 ? "st" : 
          day === 2 || day === 22 ? "nd" : 
          day === 3 || day === 23 ? "rd" : "th";
        
        return formattedDate.replace(/\d+/, day + suffix);
      };
      
      const groupEventsByDate = (events: { [key: number]: { date: Date; description: any; title: any; time: any; location: any; image : any;  } }) => {
        const groupedEvents: { [key: string]: { description: any; title: any; time: any }[] } = {};
    
        Object.values(events).forEach(({ date, description, title, time, image }) => {
            const formattedDate = formatDate(date);
            if (!groupedEvents[formattedDate]) {
                groupedEvents[formattedDate] = [];
            }
            groupedEvents[formattedDate].push({ description, title, time, image});
        });
    
        return groupedEvents;
    };    
      const groupedEvents = groupEventsByDate(venues[curr].events);
      console.log("Final",groupedEvents);
      console.log("nig",venues[curr]);
  return (
    <div><Venuepage title={id.toUpperCase()} descr={venues[curr].description} imgv={venues[curr].image} details={groupedEvents} location={venues[curr].location} /></div>
  )
}

export default page