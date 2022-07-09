import { IParent } from './models/types';

export const data: IParent = {
	children: [],
};

export const dummyData = [
	{
		id: 1,
		title: 'category 1',
		depth: 0,
		parentId: null,
	},
	{
		id: 2,
		title: 'category 2',
		depth: 0,
		parentId: null,
	},
	{
		id: 3,
		title: 'category 3',
		depth: 0,
		parentId: null,
	},
	{
		id: 4,
		title: 'subcategory 1.1',
		depth: 1,
		parentId: 1,
	},
	{
		id: 5,
		title: 'subcategory 1.2',
		depth: 1,
		parentId: 1,
	},
	{
		id: 6,
		title: 'subcategory 1.3',
		depth: 1,
		parentId: 1,
	},
	{
		id: 7,
		title: 'subcategory 2.1',
		depth: 1,
		parentId: 2,
	},
	{
		id: 8,
		title: 'subcategory 2.2',
		depth: 1,
		parentId: 2,
	},
	{
		id: 9,
		title: 'subcategory 2.3',
		depth: 1,
		parentId: 2,
	},
	{
		id: 10,
		title: 'subcategory 3.1',
		depth: 1,
		parentId: 3,
	},
	{
		id: 11,
		title: 'subcategory 3.2',
		depth: 1,
		parentId: 3,
	},
	{
		id: 12,
		title: 'subcategory 3.1.1',
		depth: 2,
		parentId: 10,
	},
	{
		id: 13,
		title: 'subcategory 3.1.2',
		depth: 2,
		parentId: 10,
	},
	{
		id: 14,
		title: 'subcategory 3.1.3',
		depth: 2,
		parentId: 10,
	},
];
