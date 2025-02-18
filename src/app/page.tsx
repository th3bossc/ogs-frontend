"use client";

import Container from "@/components/Container";
import Section from "@/components/Section";
import { outfit, vegawanty } from "@/fonts";
import { getEvents } from "@/lib/events";
import Image from "next/image";
import { use, useEffect, useMemo } from "react";

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
      data
    </Container>
  );
}
