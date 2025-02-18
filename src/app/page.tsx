"use client";

import ButtonDate from "@/components/Button/ButtonDate";
import VenueCard from "@/components/Card/VenueCard";
import CarouselAd from "@/components/Carousel/CarouselAd";
import CarouselHero from "@/components/Carousel/CarouselHero";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Title from "@/components/Title";
import { outfit, vegawanty } from "@/fonts";
// import {} from "@/lib/dummy-data"
import { getEvents } from "@/lib/events";
import { getVenues } from "@/lib/venues";
import { Venue } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useMemo, useState } from "react";

export default function Home() {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [venues, setVenues] = useState<Venue[]>([]) 

  const heroSectionLInks = useMemo(
    () => [
      {
        name: "EVENT UPDATES",
        image: "/hero-section/event-updates.png",
        url: "#",
        bgColor: "bg-[#0793FF38]",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        brief: "Get updates about events",
      },
      {
        name: "BUS TRACKING",
        image: "/hero-section/bus-tracking.png",
        url: "#",
        bgColor: "bg-[#1A265A80]",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        brief: "Track your bus in an easy way",
      },
      {
        name: "CAMPUS TRACKING",
        image: "/hero-section/compus-tracking.png",
        url: "#",
        bgColor: "bg-[#CE8B8B66]",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        brief: "Track your campus in an easy way",
      },
    ],
    []
  );

  useEffect(() => {
    const getAllVenues = async () => {
      const venues = await getVenues();
      setVenues(venues);
    }


    getAllVenues()
  }, [])

  return (
    <Container>
      <div className="mt-8"></div>
      <Section>
        <Title title="Event Updates" />
        <CarouselHero />
      </Section>

      <div className="my-8"></div>

      <Section>
        <div className="flex justify-between">
          <Title title="Venues" />
        </div>
        {venues.slice(0, showAll ? venues.length : 1).map((venue, idx) => (
          <VenueCard key={idx} name={venue.name} image={venue.image || "#"} />
        ))}
        <div className="flex justify-center -translate-y-4">
          <button
            className={`h-10 w-10 rounded-full bg-white text-black ${
              showAll && "rotate-180"
            }`}
            onClick={() => setShowAll((prev) => !prev)}
          >
            V
          </button>
        </div>
      </Section>

      <div className="my-8"></div>

      <Section>
        <div className="flex justify-between">
          <Title title="Just for you" />
          <Link href="/see-more" className="text-blue-400">
            see more
          </Link>
        </div>
        <div>
          <CarouselAd />
        </div>
      </Section>
    </Container>
  );
}
