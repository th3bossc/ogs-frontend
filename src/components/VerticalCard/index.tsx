"use client";
import { motion } from "framer-motion";

export interface VerticalCardProps {
    imageUrl: string,
    title: string,
    subtitle: string,
    extraInfo?: string,
}

const VerticalCard = ({
    imageUrl,
    title,
    subtitle,
    extraInfo,
}: VerticalCardProps) => {
    return (
        <motion.div
            className="w-[300px] min-h-[400px] h-full flex flex-col justify-between"
            whileHover={{ rotate: -2 }}
        >
            <img src={imageUrl} alt={title} className="w-full h-[300px] w-full object-cover rounded-[32px] aspect-square" />
            <div className="px-4 flex flex-col h-full justify-end">
                <span className="font-extrabold text-xl text-white"> {title} </span>
                <span className="font-extrabold text-xl text-[rgba(255,255,255,0.77)]"> {subtitle} </span>
                {
                    extraInfo &&
                    <span className="font-extrabold text-xl text-[rgba(255,255,255,0.77)]"> {extraInfo} </span>
                }
            </div>
        </motion.div>
    )
}

export default VerticalCard;