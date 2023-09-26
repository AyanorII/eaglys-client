import { Card } from "@/components/ui/card";

import { Query as IQuery } from "../types";

type Props = {
	query: IQuery;
};

export const Query = ({ query }: Props) => {
	const { original, hashed, columns } = query;

	return (
		<Card>
			<div className="flex items-center gap-4 p-4">
				<div className="flex flex-col gap-4">
					<code>{original}</code>
					<code>{hashed}</code>
				</div>
				<div>
					<pre>{JSON.stringify(columns, null, 2)}</pre>
				</div>
			</div>
		</Card>
	);
};
