import Hero from "@/components/Hero";
import TextGenerate from "@/components/TextGenerate";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="h-full min-h-screen w-full">
      <section className="h-full min-h-screen flex items-center justify-center px-10 lg:p-0">
        <Hero />
      </section>
      <div className="h-12 lg:h-48 w-full flex items-center justify-center">
        <h1 className="text-xl lg:text-8xl font-medium text-center ">
          <TextGenerate words="What we have brought for you" />
        </h1>
      </div>
      <div className="mt-10 min-h-screen h-full w-full flex items-center justify-center gap-12 flex-col font-semibold text-2xl lg:text-9xl">
        <Marquee
          gradient={false}
          speed={50}
          className="overflow-hidden"
        >
          UPDATES ABOUT EVENTS
        </Marquee>

        <Marquee
          gradient={false}
          speed={80}
          className="overflow-hidden"
        >
          FACILITIES NEAR YOU
        </Marquee>

        <Marquee
          gradient={false}
          speed={110}
          className="overflow-hidden"
        >
          CAMPUS TRACKING
        </Marquee>
      </div>
    </div>
  );
}
