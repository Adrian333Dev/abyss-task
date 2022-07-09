import { createContext, DragEvent, FC, useState } from 'react';
import { ContextType, IChild } from '../models/types';

export const Context = createContext<ContextType | null>(null);

interface IProps {
	children: React.ReactNode;
}

const Provider: FC<IProps> = ({ children }) => {
	const [categories, setCategories] = useState<IChild[]>([]);
	const [position, setPosition] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [modalTarget, setModalTarget] = useState<number | null>(null);

	const openModal = () => setIsModalOpen(true);

	const closeModal = () => setIsModalOpen(false);

	const setModalTargetFn = (target: number) => setModalTarget(target);

	// ! set Position
	const handleDrag = (e: DragEvent) => {
		if (e.clientX > 0 && e.clientY > 0) {
			setPosition({ x: e.clientX, y: e.clientY });
		}
	};

	// ! Add new category
	const addCategory = (input: string, type: string, parent: IChild | null) => {
		const newCategory: IChild = {
			id: Math.random() * 2,
			title: input,
			type: type,
			parentId: parent ? parent.id : null,
			depth: parent ? parent.depth + 1 : 0,
		};
		setCategories([...categories, newCategory]);
	};

	// ! Remove category
	const removeCategory = (id: number) => {
		setCategories(categories.filter((category: IChild) => category.id !== id));
	};

	// ! Update category
	const updateCategory = (input: string, id: number) => {
		const newCategories = categories.map((category: IChild) => {
			if (category.id === id) {
				return { ...category, title: input };
			}
			return category;
		});
		setCategories(newCategories);
	};

	return (
		<Context.Provider
			value={{
				isModalOpen,
				position,
				categories,
				modalTarget,
				handleDrag,
				addCategory,
				removeCategory,
				updateCategory,
				openModal,
				closeModal,
				setModalTargetFn,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Provider;
