import Link from "next/link";

const Page = async ({
    params
}: {
    params: Promise<{ 'event-name': string }>
}) => {
    const eventName = decodeURI((await params)['event-name']);
    const data = {
        imageUrls: [
            "/tmp/ragam-image.png",
            "/tmp/tathva-image.png",
            "/tmp/iedc-image.png",
        ],
        title: "TATHVA '24",
        description: "Fly high with us! Tathva'24 is calling all drone enthusiasts to take part in the exciting 'Drone Racing' event. Experience the thrill of racing through the sky, navigating tough turns, and speeding through tight spaces. Register now for a fast-paced adventure filled with excitement and high-energy action!",
        websiteUrl: "https://www.tathva.org/",
        date: "25th, 26th and 27th October 2024",
        socials: [
            {
                label: "instagram",
                profile: "https://www.instagram.com/"
            }
        ]
    }
    return (
        <div className="min-h-screen h-full w-full">
            <div className="min-h-[50dvh] h-full w-screen overflow-x-scroll text-center">
                <div className="flex gap-4 items-center justify-center" style={{
                    width: `calc(${data.imageUrls.length}*75dvh + ${data.imageUrls.length - 1}*1rem)`
                }}>
                    {
                        data.imageUrls.map((img, index) => (
                            <img key={index} src={img} alt={`image-${index}`} className="w-[75dvh] h-[50dvh] object-cover border border-white rounded-xl" />
                        ))
                    }
                </div>
            </div>

            <div className="w-full p-4 ">
                <h1 className="text-2xl md:text-4xl text-center w-inherit font-regular mb-2"> {data.title} </h1>
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


                    <div className="font-regular bg-[#0f0f0f] p-6 rounded-[25px] w-full lg:w-1/4 flex flex-col">
                        <span className="mb-2"> Date </span>
                        <span> {data.date} </span>
                    </div>


                    <div className="font-regular bg-[#0f0f0f] p-6 rounded-[25px] w-full lg:w-1/4 flex flex-col">
                        <span className="mb-2"> Follow on </span>
                        {
                            data.socials.map((social, index) => (
                                <Link href={social.profile} target="_blank" key={index} className="text-red-200"> {social.label} </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Page;