"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import { createQuery } from "../actions";
import { CreateQuerySchema, createQuerySchema } from "../schemas";

export const QueryForm = () => {
	const [isPending, startTransition] = useTransition();

	const formMethods = useForm<CreateQuerySchema>({
		defaultValues: {
			query: "",
		},
		resolver: zodResolver(createQuerySchema),
	});

	const { handleSubmit, control, setError, reset } = formMethods;

	const onSubmit = handleSubmit(({ query }) => {
		startTransition(async () => {
			const data = await createQuery(query);

			if ("statusCode" in data && data.statusCode !== 201) {
				const { message: error } = data;

				setError("query", {
					message: Array.isArray(error) ? error[0] : error,
				});
			} else {
				reset();
			}
		});
	});

	return (
		<div>
			<Form {...formMethods}>
				{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
				<form onSubmit={onSubmit}>
					<FormField
						control={control}
						name="query"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Query</FormLabel>
								<FormControl>
									<Textarea {...field} placeholder="SELECT * FROM users" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						className="ml-auto mt-2 block"
						type="submit"
						disabled={isPending}
					>
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
};
