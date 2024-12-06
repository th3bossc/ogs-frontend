import { supplyBold } from "@/fonts";
import Button, { ButtonProps } from "../Button";

export interface CardProps {
    type?: "landscape" | "portrait",
    imageUrl: string,
    title: string,
    content: string,
    buttonProps: ButtonProps,
}

const Card = ({
    type = "landscape",
    imageUrl,
    title,
    content,
    buttonProps
}: CardProps) => {

    return (
        // type === "landscape" ? (
        //     <div>
        //     </div>
        // ) : (
        //     <div>
        //     </div >
        // )
        <div className="w-full max-w-[600px] h-full min-h-[300px] m-4 flex items-center justify-center gap-2 bg-[linear-gradient(228.4deg,_rgba(54,49,49,0.31)_48.57%,_rgba(130,130,130,0.31)_57.92%,_rgba(54,49,49,0.31)_65.03%)] border border-[rgba(255,255,255,27%)] border-[1px] rounded-[15px]">
            <div className="w-full h-full min-h-[300px] overflow-hidden relative">
                <img src={imageUrl} className="absolute -bottom-4 lg:-bottom-8 -left-4 lg:-left-8 rounded-[35px]" />
            </div>
            <div className="w-full h-full min-h-[300px] flex flex-col items-start justify-center gap-2">
                <span className={`${supplyBold.className} font-medium text-xl lg:text-2xl`}> {title} </span>
                <span className="font-regular text-lg lg:text-xl"> {content} </span>
                <Button className="mt-4" {...buttonProps} />
            </div>
        </div>
    )
}


export default Card;