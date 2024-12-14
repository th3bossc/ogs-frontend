"use client";

import HighLightText from "@/components/HighLightText";
import Input from "@/components/Input";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useMemo, useState } from "react";

const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currSearchItem = searchParams.get('searchItem');
    const [searchItem, setSearchItem] = useState(currSearchItem || "");

    const data = useMemo(() => ({
        imageUrls: [
            "/tmp/ragam-image.png",
            "/tmp/tathva-image.png",
            "/tmp/iedc-image.png",
        ],
        title: "TATHVA '24",
        description: "Fly high with us! Tathva'24 is calling all drone enthusiasts to take part in the exciting 'Drone Racing' event. Experience the thrill of racing through the sky, navigating tough turns, and speeding through tight spaces. Register now for a fast-paced adventure filled with excitement and high-energy action!",
        websiteUrl: "https://www.tathva.org/",
    }), []);

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchItem(value);
    }


    const routeTo = () => {
        router.push(`/search?searchItem=${searchItem}`)
    }

    return (
        <div className="min-h-screen h-full w-full">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 px-10 mb-12">
                <HighLightText className="text-4xl">
                    Results for &apos;{currSearchItem}&apos;
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
            <div className="min-h-[50dvh] h-full w-screen overflow-x-scroll text-center p-6">
                <div className="flex gap-4 items-center justify-center" style={{
                    width: `calc(${data.imageUrls.length}*75dvh + ${data.imageUrls.length - 1}*1rem)`
                }}>
                    {
                        data.imageUrls.map((img, index) => (
                            <img key={index} src={img} alt={`image-${index}`} className="w-[75dvh] h-[50dvh] object-cover rounded-xl" />
                        ))
                    }
                </div>
            </div>

            <div className="w-full p-4 ">
                <div className="bg-[#0f0f0f] w-full p-6 rounded-[25px]">
                    <span className="mb-2"> Description </span>
                    <p className="mt-2 font-regular">
                        {data.description}
                    </p>
                </div>
                <div className="mt-2 w-full flex flex-col lg:flex-row items-center gap-2">
                    <div className="font-regular bg-[#0f0f0f] p-6 rounded-[25px] w-full lg:w-1/4 flex flex-col">
                        <span className="mb-2"> For more information </span>
                        <Link href={data.websiteUrl} target="_blank" className="text-[rgba(56,159,239,1)]"> {data.websiteUrl} </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;