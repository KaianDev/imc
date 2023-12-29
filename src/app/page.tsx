"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/app/components/Input";
import { FormImc, formImcSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { calcIMC } from "@/helpers/calcIMC";
import { resultsIMC } from "@/data/resultsIMC";
import { CardItem } from "@/app/components/CardItem";
import { ResultIMC } from "@/types/ResultsIMC";
import { BackButton } from "@/app/components/BackButton";

export default function Home() {
    const [results, setResults] = useState({
        show: false,
        message: "",
    });
    const [resultItem, setResultItem] = useState<ResultIMC>();
    const { handleSubmit, control } = useForm<FormImc>({
        resolver: zodResolver(formImcSchema),
    });

    const handleCalcImc = (data: FormImc) => {
        const imc = calcIMC(data.height, data.weight);
        if (imc > 0 && imc <= 18.5) {
            setResultItem(resultsIMC.find((item) => item.title === "Magreza"));
        } else if (imc > 18.5 && imc <= 24.9) {
            setResultItem(resultsIMC.find((item) => item.title === "Normal"));
        } else if (imc > 24.9 && imc <= 30) {
            setResultItem(
                resultsIMC.find((item) => item.title === "Sobrepeso")
            );
        } else {
            setResultItem(
                resultsIMC.find((item) => item.title === "Obesidade")
            );
        }
        setResults({
            message: `Seu IMC é de ${imc.toFixed(2)} kg/m²`,
            show: true,
        });
    };

    const handleBackButtonClick = () => {
        setResultItem(undefined);
        setResults({ show: false, message: "" });
    };

    return (
        <main className="flex-1 w-full h-full flex items-center justify-center">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row p-6 gap-8">
                <section className="flex-1 flex flex-col gap-4">
                    <h1 className="text-5xl font-semibold">Calcule seu IMC</h1>
                    <p className="text-lg text-slate-700">
                        IMC é a sigla para Índice de Massa Corporal, parâmetro
                        adotado pela Organização Mundial de Saúde para calcular
                        o peso ideal para cada pessoa.
                    </p>
                    <div className="mt-auto">
                        <form
                            className="flex flex-col gap-4"
                            onSubmit={handleSubmit(handleCalcImc)}>
                            <Input
                                control={control}
                                name="height"
                                placeholder="Digite sua altura. Ex: 1,5 (em metros)"
                                disabled={results.show}
                            />
                            <Input
                                control={control}
                                name="weight"
                                placeholder="Digite seu peso. Ex: 78,5 (em quilogramas)"
                                disabled={results.show}
                            />
                            <button
                                type="submit"
                                disabled={results.show}
                                className="p-2 mt-6 bg-sky-800 text-slate-100 uppercase rounded-md hover:bg-sky-950 duration-200 ease-out disabled:bg-sky-950">
                                Calcular
                            </button>
                        </form>
                    </div>
                </section>
                <section className="flex-1">
                    {!results.show && (
                        <div className="h-full grid grid-cols-2 gap-6">
                            {resultsIMC.map((item) => (
                                <CardItem
                                    key={item.id}
                                    isFinalResult={false}
                                    item={item}
                                />
                            ))}
                        </div>
                    )}
                    {results.show && resultItem && (
                        <div className="w-full h-full relative mt-4">
                            <BackButton onClick={handleBackButtonClick} />
                            <CardItem
                                message={results.message}
                                isFinalResult={true}
                                item={resultItem}
                            />
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
