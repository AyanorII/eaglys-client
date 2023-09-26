"use server";

import { revalidatePath } from "next/cache";

import { ApiError } from "@/lib/api/types";

import { QUERIES_ENDPOINT } from "../constants";

import { Query } from "../types";

export const createQuery = async (query: string): Promise<Query | ApiError> => {
	const res = await fetch(QUERIES_ENDPOINT, {
		method: "POST",
		body: JSON.stringify({ query }),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = (await res.json()) as Query | ApiError;

	revalidatePath("/");

	return data;
};
