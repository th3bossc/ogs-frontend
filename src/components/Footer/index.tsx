import Image from "next/image";
import { vegawanty } from "@/fonts";
import Title from "../Title";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full h-full flex flex-col md:grid md:grid-cols-3 gap-8 bg-[#141415] mt-24 py-12 px-12">
      <div className="flex flex-col gap-4">
        <img src="/logo.svg" className="w-[100px]" alt="" />
        <Title title="ABOUT US" />
        <p className="pl-2">
          OGS is a comprehensive app designed to transform institutes into
          digital campuses. It offers real-time bus tracking, campus navigation,
          and instant updates on campus events. With OGS, we aim to enhance
          connectivity and convenience, making campus life more efficient and
          engaging for students and staff alike. Embrace the future with our
          all-in-one digital campus solution.
        </p>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div>
          <Title title="CONTACT US" />
          <div className="pl-4 flex flex-col gap-2 font-semibold text-gray-500 tracking-wide">
            <Link href={"tel:+919656584346"}>9656584346</Link>
          </div>
        </div>
        <div>
          <Title title="FOLLOW US ON" />
          <div className="pl-4 flex flex-col gap-3">
            <Link
              href={"https://www.instagram.com/ogsofficial.in"}
              className="flex items-center gap-2 font-semibold"
            >
              <FaInstagram size={25} /> Instagram
            </Link>
            <Link
              href={"https://www.linkedin.com/company/own-guide-system-ogs/"}
              className="flex items-center gap-2 font-semibold"
            >
              <FaLinkedin size={25} /> Linked in
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <Title title="LINKS" />
        <div className="pl-4 flex flex-col gap-2 font-semibold text-gray-500 tracking-wide">
          <Link href={""}>PROSHOWS</Link>
          <Link href={""}>WORKSHOPS</Link>
          <Link href={""}>TALK SHOWS</Link>
          <Link href={""}>COMPETITIONS</Link>
          <Link href={""}>SPORTS</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
