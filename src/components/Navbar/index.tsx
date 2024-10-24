"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(0);
    const pathname = usePathname();
    const router = useRouter();
    const items = useMemo(() => [
        {
            label: 'HOME',
            href: '/'
        },
        {
            label: "ABOUT US",
            href: "/about",
        },
        {
            label: "CONTACT US",
            href: "/contact",
        },
        {
            label: "SIGN IN",
            href: "/signin",
        }
    ], []);

    const itemClassName = useCallback((index: number) => {
        if (index == active)
            return "font-bold text-white"
        else
            return "font-bold text-[#C4C4C4]/50"
    }, [active]);



    useEffect(() => {
        console.log(pathname);
        const index = items.findIndex(item => item.href == pathname);
        setActive(index);
    }, [items, pathname]);

    const routeHandler = useCallback((href: string) => () => {
        if (href)
            router.push(href);
    }, [router]);

    return (
        <nav className="w-full h-20 fixed top-0 left-0 flex items-center justify-center">
            <div className="flex items-center justify-center gap-4">
                {
                    items.map((item, index) => (
                        <button
                            key={index}
                            className={itemClassName(index)}
                            onClick={routeHandler(item.href)}
                        >
                            {item.label}
                        </button>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar;