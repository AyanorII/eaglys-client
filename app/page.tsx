import { QueryList } from "@/queries/components";
import { QueryForm } from "@/queries/components/QueryForm";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-6 xl:p-24">
			<div className="z-10 w-full max-w-7xl items-center justify-between text-sm">
				<div className="mb-10 mt-6">
					<QueryForm />
				</div>
				<div>
					<QueryList />
				</div>
			</div>
		</main>
	);
}
