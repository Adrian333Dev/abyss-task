import { FC, useContext, useState } from 'react';
import { Context } from '../context/context';
import { ContextType, IChild } from '../models/types';
import { colors } from '../context/colors';

interface IProps {
	child: IChild;
}

const Category: FC<IProps> = ({ child }) => {
	const [editing, setEditing] = useState(child.title ? false : true);
	const [input, setInput] = useState(child.title);

	const { categories, addCategory, removeCategory, updateCategory } =
		useContext(Context) as ContextType;
	const subcategories = categories.filter(
		(category: IChild) => category.parentId === child.id
	);

	return (
		<>
			<div
			>
				{editing ? (
					<div className='category input-container'>
						<input
							type='text'
							value={input}
							autoFocus
							onChange={(e) => setInput(e.target.value)}
							className='input'
						/>
						<div className='btn-sm' onClick={() => removeCategory(child.id)}>
							❌
						</div>
						<div
							className='btn-sm'
							onClick={() => {
								if (input) {
									setEditing(false);
									updateCategory(input, child.id);
								}
							}}
						>
							✅
						</div>
					</div>
				) : (
					<div className='wrapper category'>
						<div
							className='btn'
							style={{
								backgroundColor: colors[child.depth],
							}}
						>
							{child.title}
						</div>
						<div
							className='btn-sm'
							onClick={() => {
								addCategory('', child);
							}}
						>
							➕
						</div>
						<div
							className='btn-sm'
							onClick={() => {
								setEditing(true);
								setInput(child.title);
							}}
						>
							✏️
						</div>
						<div className='btn-sm' onClick={() => removeCategory(child.id)}>
							❌
						</div>
					</div>
				)}

				<div
					style={{
						display: 'flex',
					}}
				>
					{subcategories &&
						subcategories.map((child: any) => (
							<Category key={child.title} child={child} />
						))}
				</div>
			</div>
		</>
	);
};

export default Category;
