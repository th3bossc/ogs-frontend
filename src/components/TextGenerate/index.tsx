"use client";
import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";
import { mergeClassName } from "@/lib/utils";
import RenderWords from "./RenderWords";
import { useInView } from "react-intersection-observer";


const TextGenerate = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");
    const { ref, inView } = useInView({ threshold: 0.9, triggerOnce: true })
    useEffect(() => {
        if (!inView) return;
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration ? duration : 1,
                delay: stagger(0.2),
            }
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);



    return (
        <div className={mergeClassName("font-bold", className)} ref={ref}>
            <div className="mt-4">
                <div className=" dark:text-white text-black leading-snug tracking-wide">
                    <RenderWords
                        wordsArray={wordsArray}
                        scope={scope}
                        filter={filter}
                    />
                </div>
            </div>
        </div>
    );
};

export default TextGenerate;