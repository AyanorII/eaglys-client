export type HashedColumn = Record<string, string>;

export interface Query {
	id: number;
	original: string;
	hashed: string;
	columns: HashedColumn;
}
