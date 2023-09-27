import { getQueries } from "../actions";
import { Query } from "./Query";

export const QueryList = async () => {
	const queries = await getQueries();

	return (
		<div className="flex flex-col gap-6">
			{queries.map((query) => (
				<Query key={query.id} query={query} />
			))}
		</div>
	);
};
