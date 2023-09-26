"use server";

import { Query } from "../types";

export const getQueries = async (): Promise<Query[]> => {
	const url = `${process.env.API_URL}/queries`;
	const res = await fetch(url);
	const queries = (await res.json()) as Query[];

	return queries;
};
