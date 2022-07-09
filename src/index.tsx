import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';
import './styles/App.scss';

import App from './App';
import Provider from './context/context';

// import './styles/test.scss';
// import Test from './Test';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider>
			<App />
			{/* <Test /> */}
		</Provider>
	</React.StrictMode>
);
