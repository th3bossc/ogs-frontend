"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  const routeHandler = useCallback(
    (href: string) => () => {
      if (href) router.push(href);
    },
    [router]
  );

  console.log(pathname);

  return (
    <nav className="px-6 py-1 w-full h-20 flex items-center justify-between bg-[linear-gradient(to_left,#facc15_10px,#000_120px)]">
      <Link href={"/"}>
        <img src="/logo.svg" className="w-24" alt="OGS Logo" />
      </Link>
      {/* <div className="px-4 py-2 border border-white max-w-[170px] flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md">
        <img src="/search.svg" className="h-4" alt="Search" />
        <input
          type="text"
          placeholder="Search now"
          className="bg-transparent text-white min-w-[100px] outline-none placeholder-gray-300"
        />
      </div> */}

      <div className="hidden md:flex justify-center gap-4 text-gray-500">
        <Link
          className={`py-4 ${
            (pathname === "/" || pathname === "/desktop") &&
            "border-b-2 border-yellow-500"
          }`}
          href={"/"}
        >
          HOME
        </Link>
        <Link className={`py-4`} href={"/about"}>
          ABOUT US
        </Link>
        <Link className={`py-4`} href={"/contact"}>
          CONTACT US
        </Link>
        <Link className={`py-4`} href={"/login"}>
          SIGN IN
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Link href={"/notification"}>
          <img src="/bell.png" className="h-7" alt="Notifications" />
        </Link>
        {/* <div className="h-10 w-10 rounded-full bg-white"></div> */}
      </div>
    </nav>
  );
};

export default Navbar;
