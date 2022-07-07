import { IParent } from './models/types';

export const data: IParent = {
	children: [],
};

export const dummyData = [
	{
		id: 1,
		title: 'Category 1',
		parentId: null,
	},
	{
		id: 2,
		title: 'Category 2',
		parentId: null,
	},
	{
		id: 3,
		title: 'subCategory 1',
		parentId: 1,
	},
	{
		id: 4,
		title: 'subCategory 2',
		parentId: 1,
	},
	{
		id: 5,
		title: 'subCategory 3',
		parentId: 2,
	},
	{
		id: 6,
		title: 'subCategory 4',
		parentId: 3,
	},
	{
		id: 7,
		title: 'subCategory 5',
		parentId: 6,
	},
	{
		id: 8,
		title: 'subCategory 6',
		parentId: 6,
	},
	{
		id: 9,
		title: 'subCategory 7',
		parentId: 8,
	},
	{
		id: 10,
		title: 'subCategory 8',
		parentId: null,
	},
]