"use client"
import { useState } from "react";
import { useEffect } from "react";
import { getVenues } from "@/lib/venues";
import { Venue } from "@/types";

const venuepage = ({title="oat", descr="OAT in NITC",imgv="https://placehold.co/382x220",details = {"Feb 21" : [1,2,3] ,"Feb 22nd" : [1,2],"Feb 23rd" : [1]}}) => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const [detailss, setDetails] = useState(Object.keys(details)[0]);
  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const data = await getVenues();
        console.log("Fetched venues:", data); 
        setVenues(data);
      } catch (error) {
        console.error("Error fetching venues:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);
  
  return (
    <>
    <div className="w-full h-[11vh] mt-4 px-4 ">
        <div className="text-white text-5xl flex items-end font-semibold tracking-wide mb-2">{title}</div>
        <div className="text-xl text-white opacity-[41%] font-semibold flex items-end">{descr}</div>
    </div>
    <div className="w-full flex justify-center mb-4">
        <div className="w-[90%] h-[23vh] flex justify-center items-center border-2 rounded-3xl border-white overflow-hidden">
            <img src={imgv} className="rounded-3xl" />
        </div>
    </div>
    <div className="w-full px-4">
        <div className="w-full flex justify-between">
            <span className="text-white text-[1.4rem] flex justify-start items-center font-semibold">Events Here</span>
            <span className="h-full w-[62vw] flex justify-evenly items-cente">
                {Object.keys(details).map((label, index) => (
                    <button
                        key={index}
                        onClick={() => {setActive(index);setDetails(Object.keys(details)[index])}}
                        className={`px-3 py-2 rounded-md text-[0.9rem]
                        ${active === index ? "bg-[#D9D9D9] text-black" : "bg-[#1D1D1F] text-white"}`}
                        >
                        {label}
                    </button>
                ))}
            </span>
        </div>
        <div>
            {details[detailss].map((event, index) => (
                <div key={index} className="w-full h-[10vh] flex justify-between items-center border-b-2 border-[#D9D9D9]">
                    <div className="flex items-center">
                        <span className="text-white text-[1.2rem] font-semibold">Event {event}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-white text-[1.2rem] font-semibold">Time</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default venuepage