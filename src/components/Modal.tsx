import { useContext } from 'react';
import { Context } from '../context/context';
import { ContextType } from '../models/types';

const Modal = () => {
	const { isModalOpen, closeModal, addCategory, modalTarget, categories } =
		useContext(Context) as ContextType;

	if (!isModalOpen) return null;

	const parent = categories.find(
		(category: any) => category.id === modalTarget
	);

	return (
		<div className='backdrop'>
			<div className='modal'>
				<button className='btn-exit' onClick={closeModal}>
					❌
				</button>
				<h3>What do you want to create</h3>
				<div>
					<button
						className='btn-lg'
						onClick={() => {
							closeModal();
							addCategory('', 'category', parent ? parent : null);
						}}
					>
						Category
					</button>
					<button
						className='btn-lg'
						onClick={() => {
							closeModal();
							addCategory('', 'service', parent ? parent : null);
						}}
					>
						Service
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
