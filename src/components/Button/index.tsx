"use client";
import { motion } from "framer-motion";

export interface ButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    openLinkInNewTab?: boolean;
    className?: string,
}


const Button = ({
    text,
    href,
    onClick,
    openLinkInNewTab = false,
    className,
}: ButtonProps) => {
    return (
        <motion.button
            className={`bg-[#F5F5F5] text-black font-bold text-xl px-2 py-1 rounded-md text-nowrap ${className}`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={onClick}
        >
            {
                href ? (
                    <a
                        href={href}
                        target={openLinkInNewTab ? "_blank" : "_self"}
                        rel="noreferrer"
                    >
                        {text}
                    </a>
                ) :
                    <span>
                        {text}
                    </span>
            }
        </motion.button>
    )
}

export default Button;