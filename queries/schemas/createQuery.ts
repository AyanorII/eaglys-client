import { z } from "zod";

export const createQuerySchema = z.object({
	query: z.string().min(1, { message: "Query can't be blank" }),
});

export type CreateQuerySchema = z.infer<typeof createQuerySchema>;
