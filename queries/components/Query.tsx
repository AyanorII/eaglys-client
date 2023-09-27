import { Card } from "@/components/ui/card";

import { Query as IQuery } from "../types";

type Props = {
	query: IQuery;
};

export const Query = ({ query }: Props) => {
	const { original, hashed, columns } = query;

	return (
		<Card className="p-2 shadow-lg">
			<div className="grid grid-cols-1 gap-6 break-words p-4">
				<div>
					<p className="mb-1 font-sans text-lg font-bold">Query</p>
					<code>{original}</code>
				</div>
				<div>
					<p className="mb-1 font-sans text-lg font-bold">
						Query with hashed columns
					</p>
					<code>{hashed}</code>
				</div>
				<div className="xl:col-span-full">
					<p className="mb-1 font-sans text-lg font-bold">Hashed columns</p>
					<pre className="hidden break-words md:block">
						{JSON.stringify(columns, null, 2)}
					</pre>
					<div className="flex flex-col gap-2 md:hidden">
						{Object.entries(columns).map(([columnName, hashedColumn]) => (
							<div key={columnName}>
								<code>{columnName} = </code>
								<code>{hashedColumn}</code>
							</div>
						))}
					</div>
				</div>
			</div>
		</Card>
	);
};
