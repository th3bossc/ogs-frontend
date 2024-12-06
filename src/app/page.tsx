"use client";

import Card, { CardProps } from "@/components/Card";
import Hero from "@/components/Hero";
import HighLightText from "@/components/HighLightText";
import TextGenerate from "@/components/TextGenerate";
import { useMemo } from "react";
import Marquee from "react-fast-marquee";

export default function Home() {

  const dummyFestData: CardProps[] = useMemo((): CardProps[] => [
    {
      imageUrl: '/ragam-image.png',
      title: "RAGAM '25",
      content: "Biggest Tech Fest in South India",
      buttonProps: {
        text: "Visit Now",
        href: "https://ragam.co.in",
        openLinkInNewTab: true,
      }
    },
    {
      imageUrl: '/tathva-image.png',
      title: "TATHVA '24",
      content: "Biggest Tech Fest in South India",
      buttonProps: {
        text: "Visit Now",
        href: "https://tathva.org",
        openLinkInNewTab: true,
      }
    },
  ], []);



  return (
    <div className="h-full min-h-screen w-full">
      <section className="h-full min-h-screen flex flex-col items-center justify-center px-10 lg:p-0 mb-10">
        <Hero />
        <HighLightText className="w-full lg:w-3/4">
          Fly high with us! Tathva&apos;24 is calling all drone enthusiasts to take part in the exciting &apos;Drone Racing&apos; event. Experience the thrill of racing through the sky, navigating tough turns, and speeding through tight spaces. Register now for a fast-paced adventure filled with excitement and high-energy action!
        </HighLightText>
      </section>
      <div className="h-12 lg:h-48 w-full flex items-center justify-center">
        <h1 className="text-xl md:4xl lg:text-6xl font-medium text-center ">
          <TextGenerate words="What we have brought for you" />
        </h1>
      </div>
      <section className="mt-10 min-h-screen h-full w-full flex items-center justify-center gap-12 flex-col font-semibold text-2xl lg:text-9xl">
        <Marquee
          gradient={false}
          autoFill
          speed={50}
          className="overflow-hidden"
        >
          UPDATES ABOUT EVENTS &nbsp; &nbsp; &nbsp;
        </Marquee>

        <Marquee
          gradient={false}
          speed={80}
          autoFill
          className="overflow-hidden"
        >
          FACILITIES NEAR YOU &nbsp; &nbsp; &nbsp;
        </Marquee>

        <Marquee
          gradient={false}
          speed={110}
          autoFill
          className="overflow-hidden"
        >
          CAMPUS TRACKING &nbsp; &nbsp; &nbsp;
        </Marquee>
      </section>

      <section id="fests" className="px-5 md:px-12 lg:px-24 h-full min-h-screen">
        <HighLightText className="w-full text-lg md:text-4xl my-4 lg:my-8"> FESTS OF NITC </HighLightText>
        <div className="w-full flex items-center justify-center flex-col gap-4">
          {
            dummyFestData.map((cardProps, index) => (
              <Card key={index} {...cardProps} />
            ))
          }
        </div>
      </section>

      <section id="upcoming-events" className="px-5 md:px-12 lg:px-24 h-full min-h-screen">
        <HighLightText className="w-full text-lg md:text-4xl my-4 lg:my-8"> UPCOMING EVENTS </HighLightText>
        <div className="w-full grid">

        </div>
      </section>
    </div>
  );
}
