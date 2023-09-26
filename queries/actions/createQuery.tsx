"use server";

import { QUERIES_ENDPOINT } from "../constants";

import { Query } from "../types";

export const createQuery = async (query: Omit<Query, "id">): Promise<Query> => {
	const res = await fetch(QUERIES_ENDPOINT, {
		method: "POST",
		body: JSON.stringify(query),
	});

	const newQuery = (await res.json()) as Query;

	return newQuery;
};
