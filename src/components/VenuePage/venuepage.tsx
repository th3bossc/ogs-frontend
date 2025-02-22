"use client"
import { useState } from "react";
import { useEffect } from "react";
import { getVenues } from "@/lib/venues";
import { Venue } from "@/types";
import Potraitcard from "@/components/Card/Potraitcard";
import Link from "next/link";

const Venuepage = ({title="oat", descr="OAT in NITC",imgv="https://placehold.co/382x220",details = {"Feb 21" : [1,2,3] ,"Feb 22nd" : [1,2],"Feb 23rd" : [1]},location}) => {
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
  console.log("hi",location);
  return (
    <>
    <div className="w-full h-[11vh] mt-4 px-4 ">
        <div className="text-white text-5xl flex items-end font-semibold tracking-wide mb-2">{title}</div>
        <div className="text-xl text-white opacity-[41%] font-semibold flex items-end">{descr}</div>
    </div>
    <div className="w-full flex justify-center mb-4">
        <div className="w-[90%] h-[23vh] flex justify-center items-center rounded-3xl overflow-hidden">
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
                <div key={index} className="w-full flex justify-between items-center">
                    <Potraitcard />
                </div>
            ))}
        </div>
        <div className="mt-4">
  <div className="text-3xl text-white font-semibold mb-1">Location</div>

  {/* Flexbox for inline arrangement */}
  <div className="flex items-center justify-between w-full ">
    {/* Left side: Emoji + Text */}
    <div className="flex items-center space-x-2">
      <div className="text-4xl ">📍</div>
      <div className="opacity-[41%] text-xl font-semibold max-w-[50vw] overflow-hidden">
        Hi hello hi hello hello hello
      </div>
    </div>

    {/* Right side: Button */}
    <div className="text-2xl font-semibold bg-[#FFCC00] rounded-xl py-2 px-4 text-black ">
      <Link href={location}>Start</ Link>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Venuepage