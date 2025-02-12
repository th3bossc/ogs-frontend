"use client";

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

  return (
    <nav className="p-1 w-full h-20 flex items-center justify-between bg-[linear-gradient(to_left,#facc15_10px,#000_120px)]">
      <img src="/logo.svg" className="w-24" alt="OGS Logo" />

      <div className="px-4 py-2 border border-white max-w-[170px] flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md">
        <img src="/search.svg" className="h-4" alt="Search" />
        <input
          type="text"
          placeholder="Search now"
          className="bg-transparent text-white min-w-[100px] outline-none placeholder-gray-300"
        />
      </div>

      <div className="flex items-center gap-3">
        <img src="/bell.png" className="h-7" alt="Notifications" />
        <div className="h-10 w-10 rounded-full bg-white"></div>
      </div>
    </nav>
  );
};

export default Navbar;
