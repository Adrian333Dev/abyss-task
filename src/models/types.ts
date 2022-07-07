export interface IParent {
	children: IChild[];
}

export interface IChild {
	id: number;
	title: string;
	parentId: number | null;
}

export type ContextType = {
	categories: IChild[];
	addCategory: (input: string, id: number | null) => void;
	removeCategory: (id: number) => void;
	updateCategory: (input: string, id: number) => void;
};
