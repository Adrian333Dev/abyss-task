import { FC, useContext, useEffect, useRef, useState } from 'react';

import { Context } from './context/context';
import { ContextType } from './models/types';
import Tree from './components/Tree';
import Modal from './components/Modal';

const App: FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { position } = useContext(Context) as ContextType;
	const { x, y } = position;

	const [xPos, setXPos] = useState<number>(x);
	const [yPos, setYPos] = useState<number>(y);

	useEffect(() => {
		if (
			ref.current &&
			ref.current.offsetWidth > 0 &&
			ref.current.offsetHeight > 0 &&
			ref.current.offsetWidth < window.innerWidth &&
			ref.current.offsetHeight < window.innerHeight
		) {
			setXPos(x - ref.current.offsetWidth / 2);
			setYPos(y - ref.current.offsetHeight / 2);
		}
	}, [x, y]);

	return (
		<>
			<div
				className='App'
				ref={ref}
				style={
					x && y
						? {
								left: xPos + 110,
								top: yPos + 5,
						  }
						: {}
				}
			>
				<Tree />
			</div>
			<Modal />
		</>
	);
};

export default App;
