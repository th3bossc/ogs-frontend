import { supplyBold } from "@/fonts";
import Button, { ButtonProps } from "../Button";
import { motion } from "framer-motion";

export interface HorizontalCardProps {
    imageUrl: string,
    title: string,
    content: string,
    buttonProps: ButtonProps,
}

const HorizontalCard = ({
    imageUrl,
    title,
    content,
    buttonProps
}: HorizontalCardProps) => {
    // const bgGradient = "bg-[linear-gradient(228.4deg,_rgba(54,49,49,0.31)_48.57%,_rgba(130,130,130,0.31)_57.92%,_rgba(54,49,49,0.31)_65.03%)]";
    const border = "border border-[rgba(255,255,255,27%)] border-[1px] rounded-[15px]";
    const className = `w-full max-w-[600px] h-full min-h-[300px] m-4 flex items-center justify-center gap-2 ${border}`;

    return (
        <motion.div
            className={className}
            style={{
                background: 'linear-gradient(228.4deg, rgba(54,49,49,0.31) 48.57%, rgba(130,130,130,0.31) 57.92%, rgba(54,49,49,0.31) 65.03%)',
            }}
            whileHover={{
                background:
                    'linear-gradient(228.4deg, rgba(54,49,49,0.31) 38.57%, rgba(130,130,130,0.31) 47.92%, rgba(54,49,49,0.31) 55.03%)',
                transition: { duration: 0.3 },
            }}
        >
            <div className="w-full h-full min-h-[300px] overflow-hidden relative">
                <img src={imageUrl} className="absolute -bottom-4 lg:-bottom-8 -left-4 lg:-left-8 rounded-[35px] bg-black h-full w-full" />
            </div>
            <div className="w-full h-full min-h-[300px] flex flex-col items-start justify-center gap-2">
                <span className={`${supplyBold.className} font-medium text-xl lg:text-2xl`}> {title} </span>
                <span className="font-regular text-lg lg:text-xl"> {content} </span>
                <Button className="mt-4" {...buttonProps} />
            </div>
        </motion.div>
    )
}


export default HorizontalCard;