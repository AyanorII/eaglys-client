import { getQueries } from "../actions";
import { Query } from "./Query";

export const QueryList = async () => {
	const queries = await getQueries();

	return (
		<div>
			{queries.map((query) => (
				<Query key={query.id} query={query} />
			))}
		</div>
	);
};
