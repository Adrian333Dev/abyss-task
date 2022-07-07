import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';
import './styles/App.scss';

import App from './App';
import TodoProvider from './context/context';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<TodoProvider>
			<App />
		</TodoProvider>
	</React.StrictMode>
);
