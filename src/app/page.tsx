"use client";

import Container from "@/components/Container";
import Section from "@/components/Section";
import { outfit } from "@/fonts";
import Image from "next/image";
import { useMemo } from "react";

export default function Home() {

  const heroSectionLInks = useMemo(() => [
    {
      name: "EVENT UPDATES",
      image: "/hero-section/event-updates.png",
      url: "#",
      bgColor: "bg-[#0793FF38]",
    },
    {
      name: "BUS TRACKING",
      image: "/hero-section/bus-tracking.png",
      url: "#",
      bgColor: "bg-[#1A265A80]",
    },
    {
      name: "CAMPUS TRACKING",
      image: "/hero-section/compus-tracking.png",
      url: "#",
      bgColor: "bg-[#CE8B8B66]",
    },
  ], []);


  return (
    <Container>
      <Section>
        <div className="h-screen w-full flex items-center justify-center gap-4">
          <div className="w-full lg:w-4/6 h-full flex items-center justify-center rounded-xl">
            <h2 className={`${outfit.className} font-semibold text-5xl lg:text-7xl`}> OWN GUIDE SYSTEM </h2>
          </div>
          <div className="p-4 hidden lg:flex w-2/6 gap-4 h-full flex-col items-center justify-center">
            {
              heroSectionLInks.map((data, index) => (
                <div key={index} className={`h-full w-full relative flex items-center justify-center rounded-xl group ${data.bgColor}`}>
                  <a className="bg-transparent w-full h-full" href={data.url}>
                    <h3 className={`${outfit.className} font-semibold text-2xl lg:text-4xl w-full h-full flex items-center justify-center bg-black/40 group-hover:bg-white/75 group-hover:text-black rounded-xl`}> {data.name} </h3>
                    <div className="absolute top-0 left-0 w-full h-full z-[-1] flex items-center justify-center bg-transparent">
                      <Image src={data.image} alt={data.name} height={250} width={250} className="object-fit-cover" />
                    </div>
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </Section>
    </Container>
  );
}
