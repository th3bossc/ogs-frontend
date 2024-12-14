"use client";

import Button from "@/components/Button";
import HighLightText from "@/components/HighLightText";
import Input from "@/components/Input";
import TrackCard, { TrackCardProps } from "@/components/TrackCard";
import { useRouter } from "next/navigation";
import { ChangeEvent, useMemo, useState } from "react";


const Page = () => {
    const router = useRouter();
    const [searchItem, setSearchItem] = useState("");

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchItem(value);
    }


    const routeTo = () => {
        router.push(`/search?searchItem=${searchItem}`)
    }


    const nearbyFacilities = useMemo((): TrackCardProps[] => [
        {
            icon: "/hotel.svg",
            title: "Restaurant",
            link: "#",
        },
        {
            icon: "/hotel.svg",
            title: "Hotels",
            link: "#",
        },
        {
            icon: "/shopping.svg",
            title: "Malls",
            link: "#",
        },
        {
            icon: "/shopping.svg",
            title: "Hospitals",
            link: "#",
        }
    ], []);


    return (
        <div className="min-h-screen h-full w-full">
            <section className="h-full flex flex-col px-4 py-12 lg:p-24 gap-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                    <HighLightText className="text-4xl">
                        Campus Tracking
                    </HighLightText>
                    <Input
                        className="w-full lg:w-1/3"
                        id="searchbox"
                        name="searchbox"
                        placeholder="Explore places are more...."
                        value={searchItem}
                        onChange={inputHandler}
                        onSubmit={routeTo}
                    />
                </div>
                <div className="flex flex-col lg:flex-row gap-10 h-full w-full justify-between items-center">
                    <img src="/nitc.png" alt="" className="h-full w-full lg:w-2/3 object-fit-cover" />
                    <div className="h-full w-full lg:w-fit flex justify-end" style={{
                        background: 'linear-gradient(228.02deg, rgba(128, 128, 128, 0.09) 33.78%, rgba(255, 255, 255, 0.09) 44.23%, rgba(130, 130, 130, 0.09) 54.76%, rgba(80, 80, 80, 0.09) 64.07%)'
                    }}>
                        <span className="w-1/2 lg:hidden rounded-s-[10px] flex items-center justify-center font-semibold text-base text-center">
                            TRACK YOUR CAMPUS IN MAP
                        </span>
                        <div className="w-1/2 lg:w-[300px] h-full flex items-center justify-center relative">
                            <img src="/globe-image.png" alt="" className="w-full lg:w-[300px] rounded-[10px] object-fit-cover" />
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <Button text="Explore Map" className="text-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="h-full w-full flex flex-col px-4 py-12 lg:p-24 gap-10">
                <HighLightText>
                    Nearby Facilities
                </HighLightText>
                <div className="flex flex-col items-center lg:grid grid-cols-2 xl:grid-cols-4 gap-[10px]">
                    {
                        nearbyFacilities.map((fac, index) => (
                            <TrackCard
                                key={index}
                                {...fac}
                            />
                        ))
                    }
                </div>
            </section>
        </div >
    )
}

export default Page;