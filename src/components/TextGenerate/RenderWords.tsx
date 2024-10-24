import { motion } from "framer-motion";
import { RefObject } from "react";

const RenderWords = ({
    wordsArray,
    scope,
    filter
}: {
    wordsArray: string[];
    scope: RefObject<HTMLDivElement>,
    filter: boolean,
}) => {
    return (
        <motion.div ref={scope}>
            {wordsArray.map((word, idx) => {
                return (
                    <motion.span
                        key={word + idx}
                        className="dark:text-white text-black opacity-0"
                        style={{
                            filter: filter ? "blur(10px)" : "none",
                        }}
                    >
                        {word}{" "}
                    </motion.span>
                );
            })}
        </motion.div>
    );
};

export default RenderWords;