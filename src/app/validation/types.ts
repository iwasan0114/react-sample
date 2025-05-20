import { z } from "zod";

export const inputs = z.object({
    characterLimited: z.string().min(5),
    xp: z.number()
});

export type InputsType = z.infer<typeof inputs>;