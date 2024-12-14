import { mergeClassName } from "@/lib/utils";
import { ChangeEvent } from "react";

const Input = ({
    className = "",
    name,
    id,
    placeholder,
    value,
    onChange,
    onSubmit,
}: {
    className?: string,
    name?: string,
    id: string,
    placeholder?: string,
    value?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onSubmit: () => void
}) => {
    return (
        <form className={mergeClassName("relative", className)} onSubmit={(e) => {
            e.preventDefault();
            onSubmit()
        }}>
            <input
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}

                className="bg-[#f5f5f5] rounded-[10px] px-10 py-4 text-black w-full"
            />
            <img
                className="absolute top-[50%] right-4 translate-y-[-50%]"
                src="/search.svg"
                alt=""
                width={15}
            />
        </form>
    )
}

export default Input;