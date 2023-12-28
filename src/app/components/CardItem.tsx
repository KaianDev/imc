import { ResultIMC } from "@/types/ResultsIMC";
import Image from "next/image";

interface ICardResultItem {
    item: ResultIMC;
    isFinalResult: boolean;
    message?: string;
}
export const CardItem = ({ item, isFinalResult, message }: ICardResultItem) => {
    return (
        <div
            key={item.id}
            className={`
                ${item.title === "Normal" && "bg-green-500"}
                ${item.title === "Magreza" && "bg-zinc-400"}
                ${item.title === "Sobrepeso" && "bg-yellow-400"}
                ${item.title === "Obesidade" && "bg-red-500"} 
                p-6 rounded-md flex flex-col items-center justify-center text-slate-100 text-center gap-3 h-full`}>
            <div
                className={`
                ${item.title === "Normal" && "bg-green-600"}
                ${item.title === "Magreza" && "bg-zinc-500"}
                ${item.title === "Sobrepeso" && "bg-yellow-500"}
                ${item.title === "Obesidade" && "bg-red-600"}
                ${isFinalResult ? "w-24 h-24" : "w-16 h-16"} 
                flex items-center justify-center mt-2 rounded-full`}>
                <Image
                    src={`${item.title === "Normal" ? "/up.png" : "/down.png"}`}
                    alt={item.title}
                    sizes="100vw"
                    width={0}
                    height={0}
                    className={`${isFinalResult ? "w-16" : "w-10"}`}
                />
            </div>

            <p
                className={`
                ${isFinalResult ? "text-4xl" : "text-2xl"} 
                font-bold`}>
                {item.title}
            </p>
            {message && <p className="text-lg">{message}</p>}
            <p
                className={`
                ${isFinalResult ? "text-lg" : "text-xs"} 
                font-semibold`}>
                {item.description}
            </p>
        </div>
    );
};
