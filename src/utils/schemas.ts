import { z } from "zod";

export const formImcSchema = z.object({
    height: z
        .number({ required_error: "Campo obrigatório", invalid_type_error: "" })
        .max(5, "Informe uma altura real"),
    weight: z
        .number({ required_error: "Campo obrigatório", invalid_type_error: "" })
        .max(500, "Informe um peso real"),
});

export type FormImc = z.infer<typeof formImcSchema>;
