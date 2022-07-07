import { DragEvent, FC, useContext } from 'react';
import { Context } from '../context/context';
import { ContextType } from '../models/types';

interface IProps {
	setX: (x: number) => void;
	setY: (y: number) => void;
}

const Header: FC<IProps> = ({ setX, setY }) => {
	const { addCategory } = useContext(Context) as ContextType;
	const handleDrag = (e: DragEvent) => {
		if (e.clientX > 0 && e.clientX < window.innerWidth) {
			setX(e.clientX);
		}
		if (e.clientY > 100) {
			setY(e.clientY);
		}
	};

	return (
		<div className='wrapper'>
			<div className='btn' draggable onDrag={handleDrag}>
				Categories
			</div>
			<div className='btn-sm' onClick={() => addCategory('', null)}>
				➕
			</div>
		</div>
	);
};

export default Header;
