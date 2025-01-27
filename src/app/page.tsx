"use client";

import Container from "@/components/Container";
import Section from "@/components/Section";
import { outfit, vegawanty } from "@/fonts";
import Image from "next/image";
import { useMemo } from "react";

export default function Home() {

  const heroSectionLInks = useMemo(() => [
    {
      name: "EVENT UPDATES",
      image: "/hero-section/event-updates.png",
      url: "#",
      bgColor: "bg-[#0793FF38]",
      description: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      brief: "Get updates about events",
    },
    {
      name: "BUS TRACKING",
      image: "/hero-section/bus-tracking.png",
      url: "#",
      bgColor: "bg-[#1A265A80]",
      description: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      brief: "Track your bus in an easy way",
    },
    {
      name: "CAMPUS TRACKING",
      image: "/hero-section/compus-tracking.png",
      url: "#",
      bgColor: "bg-[#CE8B8B66]",
      description: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      brief: "Track your campus in an easy way",
    },
  ], []);


  return (
    <Container>
      <Section>
        <div className="min-h-screen h-full w-full py-20 lg:pt-0 flex flex-col lg:flex-row items-start lg:items-center justify-center gap-4">
          <div className="w-full lg:w-4/6 aspect-video lg:aspect-none lg:h-full flex items-center justify-center rounded-xl">
            <h2 className={`${outfit.className} font-semibold text-2xl lg:text-7xl`}> OWN GUIDE SYSTEM </h2>
          </div>
          <div className="flex flex-col w-full h-full">
            <h3 className="text-xl block lg:hidden h-[32px]"> Explore Now </h3>
            <div className="p-4 flex w-full h-full gap-2 flex-row lg:flex-col flex-wrap lg:flex-nowrap items-center justify-start lg:justify-center">
              {
                heroSectionLInks.map((data, index) => (
                  <div key={index} className={`h-[200px] lg:h-full w-[calc(50%-0.5rem)] lg:w-full relative flex items-center justify-center rounded-xl group ${data.bgColor}`}>
                    <a className="bg-transparent w-full h-full" href={data.url}>
                      <h3 className={`${outfit.className} font-semibold text-sm lg:text-4xl w-full h-full flex items-center justify-center bg-black/40 group-hover:bg-white/75 group-hover:text-black rounded-xl`}> {data.name} </h3>
                      <div className="absolute top-0 left-0 w-full h-full z-[-1] flex items-center justify-center bg-transparent">
                        <Image src={data.image} alt={data.name} height={250} width={250} className="object-fit-cover" />
                      </div>
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </Section>
      <Section className="min-h-screen h-full w-full flex flex-col gap-4 hidden lg:flex">
        <h3 className="font-regular text-3xl lg:text-5xl w-full text-left"> More about OGS </h3>
        <div className="flex flex-col gap-[50px]">
          {
            heroSectionLInks.map((data, index) => (
              <div key={index} className={`flex ${index % 2 ? "flex-row-reverse" : "flex-row"} relative py-10`}>
                <div className="h-[400px] w-1/3 flex flex-col items-center justify-center">
                  <Image src={data.image} alt={data.name} height={500} width={500} className="w-[400px] object-cover" />
                  <p className={`${outfit.className}`}> {data.brief} </p>
                </div>
                <div className="h-auto w-2/3 flex flex-col justify-center" >
                  <span className={`${vegawanty.className} text-4xl lg:text-7xl`}> {data.name} </span>
                  <p className={`w-full lg:w-2/3 ${outfit.className} font-medium text-xl lg:text-2xl text-[#828282]`}> {data.description} </p>
                </div>
                <span className="absolute bg-[#111010] z-[-1] top-0 h-full w-[200%] -left-4 md:-left-16" />
              </div>
            ))
          }
        </div>
      </Section>
    </Container>
  );
}
