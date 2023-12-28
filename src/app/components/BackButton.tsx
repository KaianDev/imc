"use client";
import Image from "next/image";
import { ComponentProps } from "react";

export const BackButton = ({ ...props }: ComponentProps<"button">) => {
    return (
        <button
            {...props}
            className="absolute -top-6 left-1/2 -translate-x-1/2  md:-left-6 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 w-12 h-12 flex items-center justify-center bg-sky-800 rounded-full hover:bg-sky-900">
            <Image
                src="/leftarrow.png"
                alt="Seta para voltar"
                width={0}
                height={0}
                sizes="100vw"
                className="w-8 rotate-90 md:rotate-0"
            />
        </button>
    );
};
