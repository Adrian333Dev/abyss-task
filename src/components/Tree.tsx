import { FC, useContext } from 'react';
import { Context } from '../context/context';
import { ContextType, IChild } from '../models/types';
import Core from './Core';
import List from './List';

const Tree: FC = () => {
	const { categories } = useContext(Context) as ContextType;
	const topCategories = categories.filter(
		(category: IChild) => category.parentId === null
	);
	return (
		<div className='tree'>
			<ul className='main'>
				<li>
					<Core />
					{topCategories && (
						<ul>
							{topCategories.map((item: IChild) => (
								<List key={item.title} item={item} />
							))}
						</ul>
					)}
				</li>
			</ul>
		</div>
	);
};

export default Tree;
