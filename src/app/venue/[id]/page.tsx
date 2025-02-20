"use client"
import React from 'react'
import { useEffect } from "react";
import { getVenues } from "@/lib/venues";
import { Venue } from "@/types";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Venuepage from "@/components/VenuePage/venuepage";

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
  return (
    <div><Venuepage title={id.toUpperCase()} descr={venues[curr].description} imgv={venues[curr].image}/></div>
  )
}

export default page