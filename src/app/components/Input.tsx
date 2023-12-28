"use client";

import { FormImc } from "@/utils/schemas";
import { UseControllerProps, useController } from "react-hook-form";

interface IInput extends UseControllerProps<FormImc> {
    placeholder?: string;
    disabled?: boolean;
}

export const Input = ({ ...props }: IInput) => {
    const { field, fieldState } = useController(props);

    return (
        <div>
            <input
                {...field}
                type="number"
                min={1}
                placeholder={props.placeholder}
                className={`p-2 border-b-2 outline-none text-lg w-full block bg-slate-200 
                ${fieldState.error && "border-red-500"}`}
                disabled={props.disabled}
                value={field.value}
                step={0.01}
                onChange={(e) => field.onChange(parseFloat(e.target.value))}
            />
            {fieldState.error && (
                <small className="text-sm text-red-500">
                    {fieldState.error.message}
                </small>
            )}
        </div>
    );
};
