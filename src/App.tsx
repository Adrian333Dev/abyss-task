import { FC, useContext, useState } from 'react';

import Header from './components/Header';
import Category from './components/Category';
import { Context } from './context/context';
import { ContextType, IChild } from './models/types';

const App: FC = () => {
	const [x, setX] = useState<number>(window.innerWidth / 2);
	const [y, setY] = useState<number>(200);

	const { categories } = useContext(Context) as ContextType;
	const topCategories = categories.filter((child: IChild) => !child.parentId);

	return (
		<div className='App'>
			<div
				className='container'
				style={{
					left: x,
					top: y,
				}}
			>
				<Header setX={setX} setY={setY} />
				<div className={topCategories.length > 1 ? 'lineX' : ''}>
					<div />
				</div>
				<div className={'categories-container'}>
					{topCategories.map((child: any) => (
						<Category key={child.title} child={child} />
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
