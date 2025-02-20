import Image from "next/image";
import { vegawanty } from "@/fonts";
import Title from "../Title";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full h-full flex flex-col gap-8 bg-[#141415] mt-24 py-12 px-12">
      <div>
        <Title title="ABOUT US" />
        <p className="pl-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          aliquid beatae et hic, saepe nulla non tempora. Eos doloremque omnis
          maxime. Vitae, reiciendis mollitia nobis delectus magnam possimus
          distinctio labore. Laudantium cupiditate quisquam id veniam inventore,
          praesentium doloremque, in sit omnis consequuntur molestias. Minima,
          tempore unde. Quibusdam pariatur sapiente doloremque?
        </p>
      </div>
      <div>
        <Title title="CONTACT US" />
        <div className="pl-4 flex flex-col gap-2 font-semibold text-gray-500 tracking-wide">
          <Link href={"tel:"}>+123456789</Link>
          <Link href={"tel:"}>+123456789</Link>
          <Link href={"tel:"}>+123456789</Link>
        </div>
      </div>
      <div>
        <Title title="FOLLOW US ON" />
        <div className="pl-4 flex flex-col gap-3">
          <Link href={""} className="flex items-center gap-2 font-semibold">
            <FaInstagram size={25} /> Instagram
          </Link>
          <Link href={""} className="flex items-center gap-2 font-semibold">
            <FaLinkedin size={25} /> Linked in
          </Link>
        </div>
      </div>
      <div>
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
