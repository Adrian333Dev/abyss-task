import { FC, useContext } from 'react';
import { Context } from '../context/context';
import { ContextType } from '../models/types';

const Core: FC = () => {
	const { handleDrag, addCategory } = useContext(Context) as ContextType;
	return (
		<div className='wrapper content' onDrag={handleDrag} draggable>
			<button className='btn-lg'>Categories</button>
			<button
				className='btn-sm'
				onClick={() => addCategory('', 'category', null)}
			>
				➕
			</button>
		</div>
	);
};

export default Core;
