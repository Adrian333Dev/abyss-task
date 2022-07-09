import { dummyData } from './data';

const List = ({ item }: any) => {
	const { title, id, parentId } = item;
	const children = dummyData.filter((child: any) => child.parentId === id);
	return (
		<li>
			<p className='content'>{title}</p>
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

const Categories = () => {
	const topCategories = dummyData.filter(
		(category: any) => category.parentId === null
	);
	return (
		<ul className='main'>
			<li>
				<p className='content header'>categories</p>
				{topCategories && (
					<ul>
						{topCategories.map((category: any) => (
							<List key={category.title} item={category} />
						))}
					</ul>
				)}
			</li>
		</ul>
	);
};

const Test = () => {
	return (
		<div className='tree'>
			<Categories />
		</div>
	);
};

export default Test;
