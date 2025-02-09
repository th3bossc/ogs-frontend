"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(0);
    const pathname = usePathname();
    const router = useRouter();


    const routeHandler = useCallback((href: string) => () => {
        if (href)
            router.push(href);
    }, [router]);

    return (
        <nav className="w-full h-20 flex items-center justify-center">
            NAVBAR Placeholder
        </nav>
    )
}

export default Navbar;