import { DragEvent } from 'react';

export interface IParent {
	children: IChild[];
}

export interface IChild {
	id: number;
	title: string;
	type: string;
	parentId: number | null;
	depth: number;
}

export type ContextType = {
	categories: IChild[];
	position: {
		x: number;
		y: number;
	};
	isModalOpen: boolean;
	modalTarget: number | null;
	handleDrag: (e: DragEvent) => void;
	addCategory: (input: string, type: string, parent: IChild | null) => void;
	removeCategory: (id: number) => void;
	updateCategory: (input: string, id: number) => void;
	openModal: () => void;
	closeModal: () => void;
	setModalTargetFn: (target: number) => void;
};
