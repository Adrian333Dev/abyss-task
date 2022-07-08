export interface IParent {
	children: IChild[];
}

export interface IChild {
	id: number;
	title: string;
	parentId: number | null;
	depth: number;
}

export type ContextType = {
	categories: IChild[];
	addCategory: (input: string, parent: IChild | null) => void;
	removeCategory: (id: number) => void;
	updateCategory: (input: string, id: number) => void;
};
