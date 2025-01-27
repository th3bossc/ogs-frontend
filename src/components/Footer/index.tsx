import Image from "next/image";
import HighLightText from "../HighLightText";
import { vegawanty } from "@/fonts";

const Footer = () => {
    return (
        <footer className="w-full h-full flex flex-col bg-[#141415] mt-24 py-12 px-12">
            <h3 className="w-full">
                <Image src="/logo.svg" alt="footer-logo" height={150} width={150} className="h-[200px]" />
            </h3>

            <div className="h-full pb-12 w-full flex items-center justify-center">
                <div className="w-full lg:w-1/3">
                    <h5 className={`${vegawanty.className} text-[50px]`}> About us </h5>
                    <p className="text-2xl font-medium text-[#828282]">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                    </p>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col gap-4">
                    <div className="flex flex-col w-full text-center">
                        <h5 className={`${vegawanty.className} text-[50px]`}> Links </h5>
                        <span className="text-2xl text-center w-full text-[#828282]"> Campus Tracking </span>
                        <span className="text-2xl text-center w-full text-[#828282]"> Bus Tracking </span>
                        <span className="text-2xl text-center w-full text-[#828282]"> Event Tracking </span>
                    </div>
                    <div className="flex flex-col w-full text-center">
                        <h5 className={`${vegawanty.className} text-[50px]`}> Contact Us </h5>
                        <span className="text-2xl text-center w-full text-[#828282]"> +91 123467997 </span>
                        <span className="text-2xl text-center w-full text-[#828282]"> +91 123467997 </span>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 text-center">
                    <h5 className={`${vegawanty.className} text-[50px]`}> Follow Us </h5>
                    <div className="w-full flex items-center justify-center gap-4">
                        <Image src="/icons/instagram.svg" alt="instagram" height={50} width={50} className="w-[25px]" />
                        <span className="w-[100px] text-left text-2xl text-center w-full text-[#828282]"> Instagram </span>
                    </div>
                    <div className="w-full flex items-center justify-center gap-4">
                        <Image src="/icons/linkedin.svg" alt="instagram" height={50} width={50} className="w-[25px]" />
                        <span className="w-[100px] text-left text-2xl text-center w-full text-[#828282]"> Linked In </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;