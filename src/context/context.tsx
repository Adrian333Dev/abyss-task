import { createContext, FC, useState } from 'react';
import { dummyData } from '../data';
import { ContextType, IChild } from '../models/types';

export const Context = createContext<ContextType | null>(null);

interface IProps {
	children: React.ReactNode;
}

const TodoProvider: FC<IProps> = ({ children }) => {
	const [categories, setCategories] = useState<IChild[]>([]);

	// ! Add new category
	const addCategory = (input: string, parentId: number | null) => {
		const newCategory: IChild = {
			id: Math.random() * 1,
			title: input,
			parentId,
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
			value={{ categories, addCategory, removeCategory, updateCategory }}
		>
			{children}
		</Context.Provider>
	);
};

export default TodoProvider;
