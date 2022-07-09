import { useContext, useState } from 'react';
import { colors } from '../context/colors';
import { Context } from '../context/context';
import { ContextType, IChild } from '../models/types';

const List = ({ item }: { item: IChild }) => {
	const { title, id, depth, type } = item;
	const [editing, setEditing] = useState<boolean>(title ? false : true);
	const [value, setValue] = useState<string>(title);
	const {
		categories,
		updateCategory,
		removeCategory,
		openModal,
		setModalTargetFn,
	} = useContext(Context) as ContextType;
	const children = categories.filter((child: any) => child.parentId === id);

	return (
		<li>
			<div className='wrapper content'>
				{editing ? (
					<>
						<input
							className='input'
							value={value}
							autoFocus
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setValue(e.target.value)
							}
						/>
						<button
							className='btn-sm'
							onClick={() => {
								if (value) {
									setEditing(false);
									updateCategory(value, id);
								}
							}}
						>
							✅
						</button>
						<button className='btn-sm' onClick={() => removeCategory(id)}>
							❌
						</button>
					</>
				) : (
					<>
						<button
							className='btn-lg'
							style={{
								backgroundColor:
									type === 'category'
										? colors.category[depth]
										: colors.service[depth],
							}}
						>
							{title}
						</button>
						<button
							className='btn-sm'
								onClick={() => {
									setModalTargetFn(id);
									openModal();
								}}
						>
							➕
						</button>
						<button
							className='btn-sm'
							onClick={() => {
								setEditing(true);
								setValue(title);
							}}
						>
							✏️
						</button>
						<button className='btn-sm' onClick={() => removeCategory(id)}>
							❌
						</button>
					</>
				)}
			</div>
			{children.length > 0 && (
				<ul>
					{children.map((child: any) => (
						<List key={child.id} item={child} />
					))}
				</ul>
			)}
		</li>
	);
};

export default List;
